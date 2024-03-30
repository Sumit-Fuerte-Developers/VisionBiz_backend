const mongoose = require("mongoose");

const AddAreaMasterSchema = new mongoose.Schema({

    area:{
        type:String,
        required: true,
    }
},{
    timestamps:true
});
module.exports = mongoose.model("AddAreaMaster", AddAreaMasterSchema);