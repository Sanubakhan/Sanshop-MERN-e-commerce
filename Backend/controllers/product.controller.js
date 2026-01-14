const Product = require('../models/product.model');

async function getAllProducts(req, res) {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    // 🔴 IMPORTANT: return here
    return res.status(200).json(products);

  } catch (error) {
    console.error('GET PRODUCTS ERROR:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}

module.exports = { getAllProducts };
