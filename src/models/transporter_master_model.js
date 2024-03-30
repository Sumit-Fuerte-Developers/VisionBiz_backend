const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const TransporterSchema = new mongoose.Schema({
    transporter: {
        type: String,
        required: true,
        // unique: true
    },
    gstTin: {
        type: String,
        unique: true,
        required: true
    },
    
    addressLine1:  {
        type: String,
        required: true
    },
    addressLine2:  {
        type: String,
        //required: true
    },
    addressLine3:  {
        type: String,
       // required: true
    },
    city:  {
        type: String,
        required: true
    },
    state:  {
        type: String,
        required: true
    },
    pin:  {
        type: Number,
        required: true
    },
    tel1:  {
        type: Number,
        required: true
    },
    tel2:  {
        type: Number,
        required: true
    },
    mobile1:{ type: Number, unique: true, required: true },
    mobile2: { type: Number, unique: true, required: true },
    
   
    
},{
    timestamps:true
});



module.exports = mongoose.model("TransporterMaster", TransporterSchema);
