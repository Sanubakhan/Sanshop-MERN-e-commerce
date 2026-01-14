const express = require('express');
const cookieParser = require('cookie-parser');
const productRoutes = require('../routes/product.route');
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL (Vite)
    credentials: true,               // allow cookies
  })
);

// ✅ body parsers FIRST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));


// ✅ routes AFTER
const userRoutes = require('../routes/user.route');
const ownerRoutes = require('../routes/owner.route');


app.use('/api/auth', userRoutes);
app.use('/api/auth', ownerRoutes);
app.use('/api/products', productRoutes);

module.exports = app;
