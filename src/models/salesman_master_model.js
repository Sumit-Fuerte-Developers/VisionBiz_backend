const mongoose = require("mongoose");

const salesmanSchema = new mongoose.Schema({
    salesman: {
        type: String,
        required: true,
    },
    addressLine1:  {
        type: String,
        required: true
    },
    addressLine2:  {
        type: String,
    },
    addressLine3:  {
        type: String,
    },
    city:  {
        type: String,
        required: true
    },
    pin:  {
        type: Number,
        required: true,
        default: 0,
    },
    tel1:  {
        type: Number,
        default: 0,
    },
    tel2:  {
        type: Number,
        default: 0,
    },
    mobile1:{ type: Number, unique: true, required: true },
    mobile2: { type: Number, unique: true, default: 0,},
    
    emailId:{ type: String, unique: true, required: true },
    Area:{type :String, required:true},
    Commission:{type :Number, default: 0,}

},{
    timestamps:true
});

module.exports = mongoose.model("SalesmanMaster", salesmanSchema);

