const mongoose = require('mongoose');
const { Schema } = mongoose;

const ownerSchema = new Schema(
  {
   ownername : { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
   
    phoneNumber: {
      type: String,
      minlength: 10,
      maxlength: 10,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Owner', ownerSchema);
