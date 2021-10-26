const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name:  { type: String, required: true, unique: true },
  type: { type: String, required: true },
  flavour: { type: String, required: true }
});



module.exports= mongoose.model('Flanes',UserSchema)
