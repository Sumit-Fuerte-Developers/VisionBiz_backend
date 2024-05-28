const mongoose = require("mongoose");

const BranchMasterSchema = new mongoose.Schema(
    {
        branch: {
            type: String,
            required: true
        },
        sales: {
            type: Number,
            // required: true
            default: 0,
        },
        salesReturn: {
            type: Number,
            // required: true
            default: 0,
        },
        purchase: {
            type: Number,
            // required: true
            default: 0,
        },
        purchaseReturn: {
            type: Number,
            // required: true
            default: 0,
        },
        inward: {
            type: Number,
            // required: true
            default: 0,
        },
        outward: {
            type: Number,
            // required: true
            default: 0,
        },
        gtg: {
            type: Number,
            // required: true
            default: 0,
        },
        mfg: {
            type: Number,
            // required: true
            default: 0,
        },
        inward2: {
            type: Number,
            // required: true
            default: 0,
        },
        outward2: {
            type: Number,
            // required: true
            default: 0,
        },
        cashReceipt: {
            type: Number,
            // required: true
            default: 0,
        },
        storeName: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("BranchMaster", BranchMasterSchema);
