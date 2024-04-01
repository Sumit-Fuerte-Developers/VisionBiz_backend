const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductMasterSchema = new mongoose.Schema(
    {
        Item_Code: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        },
        Group: {
            type: Schema.Types.ObjectId,
            ref: 'ProductGroupMaster',
            required: true,
        },
        Class: {
            type: Schema.Types.ObjectId,
            ref: 'ProductClass',
            required: true,
        },
        Measurement: {
            type: Schema.Types.ObjectId,
            ref: 'Measurement',
            required: true,
        },
        Purchase_Rate: {
            type: Number,
            required: true
        },
        Sales_Rate: {
            type: Number,
            required: true
        },
        List_Price: {
            type: Number,
            required: true
        },
        Packing_Size: {
            type: Number,
            required: true
        },
        Margin: {
            type: Number,
            required: true
        },
        Minimum_Qty: {
            type: Number,
            required: true
        },
        Maximum_Qty: {
            type: Number,
            required: true
        },
        Lead_Time: {
            type: String,
            required: true
        },
        Days: {
            type: Number,
            required: true
        },
        Re_Order_Qty: {
            type: Number,
            required: true
        },
        Discount_Sale: {
            type: String,
            required: true
        },
        Discount_Purchase: {
            type: Number,
            required: true
        },
        Excise: {
            type: Number,
            required: true
        },
        HSN: {
            type: Schema.Types.ObjectId,
            ref: 'HSN',
            required: true,
        },
        Assess_Rate: {
            type: Number,
            required: true
        },
        Prod_Memo: {
            type: String,
            required: true
        },
        Location: {
            type: String,
            required: true
        },
        Tax_Code: {
            type: Schema.Types.ObjectId,
            ref: 'TexCode',
            required: true,
        },
        IG_Tax_Code: {
            type: String,
            required: true,
        },
        Closing: {
            type: Number,
            required: true,
        },
        Mfg_Code: {
            type: Number,
            required: true,
        },
        Mfg_Code2: {
            type: Number,
            required: true,
        },
        Mfg_Code3: {
            type: Number,
            required: true,
        },
        Mfg_Code4: {
            type: Number,
            required: true,
        },
        Mfg_Code5: {
            type: Number,
            required: true,
        },
        Rate_Per: {
            type: String,
            required: true,
        },
        Mfg_Variant: {
            type: String,
            required: true,
        },
        Price_List_No: {
            type: String,
            required: true,
        },
        Opening_Stock: {
            type: Number,
            required: true,
        },
        Stock_Value: {
            type: String,
            required: true,
        },
        Extra_Sales_Rate: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("ProductMaster", ProductMasterSchema);