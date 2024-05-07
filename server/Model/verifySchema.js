
const mongoose = require("mongoose");


const verifySchema = new mongoose.Schema({
   type: {
    type: String,
    default: "identification type"
   },
   image:{
    type: String,
    // required: true
   },
  
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        // required: true
    }
},{timestamps: true})


const Verify = mongoose.model('verify', verifySchema);

module.exports = Verify;