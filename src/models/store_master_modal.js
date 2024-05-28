const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const StoreMasterSchema = new mongoose.Schema(
    {
        Store_Code:{
            type:Number,
        },
        Store_Name: {
            type: String,
            required: true
        },
        Store_Group: {
            type: String,
           
        },
        userId:{
            type:String,
            required:true
        },
        CompanyCode:{
            type:String,
            required:true
        }

    },
    {
        timestamps: true
    }
);
StoreMasterSchema.plugin(AutoIncrement, { inc_field: 'Store_Code' });

// Create a composite index on Doc_No and SrNo to enforce uniqueness
StoreMasterSchema.index({ Store_Code: 1,}, { unique: true });
module.exports = mongoose.model("StoreMaster", StoreMasterSchema);