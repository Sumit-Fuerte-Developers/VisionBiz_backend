const mongoose = require("mongoose");

const AddCategoryMasterSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true,
    }
},{
    timestamps:true
});
module.exports = mongoose.model("AddCategoryMaster", AddCategoryMasterSchema);