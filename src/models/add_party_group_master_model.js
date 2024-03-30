const mongoose = require("mongoose");

const AddPartyGroupMasterSchema = new mongoose.Schema({

   groupname:{
        type:String,
        required: true,
    }
},{
    timestamps:true
});
module.exports = mongoose.model("AddPartyGroupMaster", AddPartyGroupMasterSchema);