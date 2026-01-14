const jwt = require('jsonwebtoken');

module.exports = function ownerAuth(req, res, next) {
  const token = req.cookies.ownerToken;

  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== 'owner') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.ownerId = decoded.ownerId;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

