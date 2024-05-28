const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const ProductGroupMasterSchema = new mongoose.Schema(
    {
        ProdGroupCode:{
            type:Number
        },
        ProdGroupName: {
            type: String,
            maxlength: 50,
            required: true
        },
        Chapter: {
            type: String,
            maxlength: 50,
          
        },
        Packing: {
            type: mongoose.Decimal128,
            
        },
        DiscA: {
            type: mongoose.Decimal128,
            
        },
        DiscB: {
            type: mongoose.Decimal128,
            
        },
        DiscC: {
            type: mongoose.Decimal128,
            
        },
        DiscD: {
            type: mongoose.Decimal128,
            
        },
        DiscE: {
            type: mongoose.Decimal128,
            
        },
        DiscF: {
            type: mongoose.Decimal128,
            
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
ProductGroupMasterSchema.plugin(AutoIncrement, { inc_field: 'ProdGroupCode' });

// Create a composite index on Doc_No and SrNo to enforce uniqueness
ProductGroupMasterSchema.index({ ProdGroupCode: 1,}, { unique: true });
module.exports = mongoose.model("ProdGroupMaster", ProductGroupMasterSchema);