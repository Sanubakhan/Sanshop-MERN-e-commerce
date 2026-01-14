const express = require('express');
const router = express.Router();

const { registerOwner } = require('../controllers/auth.controller');
const { loginOwner } = require('../controllers/auth.controller');
const ownerAuth = require('../middlewares/owner.middleware');
const { ownerDashboard } = require('../controllers/ownerdash.controller');

router.post("/owner/register", registerOwner);
router.post("/owner/login", loginOwner);


router.post('/dashboard', ownerAuth,     ownerDashboard); 


module.exports = router;