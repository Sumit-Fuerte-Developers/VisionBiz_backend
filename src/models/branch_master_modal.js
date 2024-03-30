const mongoose = require("mongoose");

const BranchMasterSchema = new mongoose.Schema(
    {
        branch: {
            type: String,
            required: true
        },
        sales: {
            type: Number,
            required: true
        },
        salesReturn: {
            type: Number,
            required: true
        },
        purchase: {
            type: Number,
            required: true
        },
        purchaseReturn: {
            type: Number,
            required: true
        },
        inward: {
            type: Number,
            required: true
        },
        outward: {
            type: Number,
            required: true
        },
        gtg: {
            type: Number,
            required: true
        },
        mfg: {
            type: Number,
            required: true
        },
        inward: {
            type: Number,
            required: true
        },
        outward: {
            type: Number,
            required: true
        },
        cashReceipt: {
            type: Number,
            required: true
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
