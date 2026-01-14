const Owner = require('../models/owner.model');
const Product = require('../models/product.model');

async function ownerDashboard(req, res) {
  try {
    // req.ownerId comes from ownerAuth middleware
    const owner = await Owner.findById(req.ownerId).select('-password');

    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }

    res.status(200).json({
      message: 'Welcome to owner dashboard',
      owner,
      actions: [
        'add-product',
        'update-product',
        'delete-product',
        'view-orders',
      ],
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}
async function addProduct(req, res) {
  try {
    const {
      name,
      price,
      discountPrice,
      backgroundColor,
      panelColor,
      textColor,
    } = req.body;

   

    const product = new Product({
      name,
      price,
      discountPrice,
      image: req.file ? `/uploads/${req.file.filename}` : null,
     
        backgroundColor,
        panelColor,
        textColor,
      
      createdBy: req.ownerId, // from ownerAuth
    });

    await product.save();

    res.status(201).json({
      message: 'Product created successfully',
      product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = { ownerDashboard , addProduct };
