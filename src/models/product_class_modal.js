const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const ProductClassSchema = new mongoose.Schema(
    {
        ProdClassCode:{
            type:Number
        },

        ProdClassName: {
            type: String,
            maxlength: 50,
            required: true
        },
        Chapter: {
            type: String,
            maxlength: 50,
            
        },
        IMEITracking:{
            type:Boolean,
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
ProductClassSchema.plugin(AutoIncrement, { inc_field: 'ProdClassCode' });

// Create a composite index on Doc_No and SrNo to enforce uniqueness
ProductClassSchema.index({ ProdClassCode: 1,}, { unique: true });

module.exports = mongoose.model("ProdClassMaster", ProductClassSchema);