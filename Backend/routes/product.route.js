const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload.middleware');
const { addProduct } = require('../controllers/ownerdash.controller');
const ownerAuth = require('../middlewares/owner.middleware');

const {getAllProducts} = require('../controllers/product.controller');

router.get('/product', getAllProducts);
router.post(
  '/addproduct',
  ownerAuth,
  upload.single('image'),
  addProduct
);
module.exports = router;