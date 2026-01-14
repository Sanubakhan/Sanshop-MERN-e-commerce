const User = require('../models/user.model');
const Owner = require('../models/owner.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


async function registerUser(req, res) {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // 👇 send user details safely
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}


async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // ✅ THIS is where cookie is saved
    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: false, // true in production (HTTPS)
      maxAge: 60 * 60 * 1000,
    });

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

async function logoutUser(req, res) {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: 'strict',
    secure: false, // true in production (HTTPS)
  });
  res.status(200).json({ message: 'Logout successful' });
}

async function registerOwner(req, res) {
  try {
    const { ownername, email, password, phoneNumber } = req.body;

    // 🔍 Debug (keep for now)
    console.log('REQ BODY:', req.body);

    // ✅ validation
    if (!ownername || !email || !password || !phoneNumber) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // 🔒 allow only ONE owner
    const ownerCount = await Owner.countDocuments();
    if (ownerCount > 0) {
      return res.status(403).json({
        message: 'Owner already exists. Only one owner is allowed',
      });
    }

    // 🔐 hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ create owner
    const newOwner = new Owner({
      ownername,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    await newOwner.save();

    return res.status(201).json({
      message: 'Owner registered successfully',
      owner: {
        id: newOwner._id,
        ownername: newOwner.ownername,
        email: newOwner.email,
        phoneNumber: newOwner.phoneNumber,
        password: newOwner.password,
        createdAt: newOwner.createdAt,
      },
    });

  } catch (error) {
    console.error('REGISTER OWNER ERROR:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}

async function loginOwner(req, res) {
  const { email, password } = req.body;

  try {
    // 🔒 find OWNER only
    const owner = await Owner.findOne({ email });
    if (!owner) {
      return res.status(401).json({ message: 'Unauthorized: Owner not found' });
    }

    // 🔐 compare password
    const isMatch = await bcrypt.compare(password, owner.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 🎟️ generate token
    const token = jwt.sign(
      { ownerId: owner._id, role: 'owner' },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // 🍪 store token in cookie
    res.cookie('ownerToken', token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: false, // true in production (HTTPS)
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: 'Owner logged in successfully',
      owner: {
        id: owner._id,
       password: owner.password,
        email: owner.email,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = { registerUser, loginUser, logoutUser, registerOwner, loginOwner };