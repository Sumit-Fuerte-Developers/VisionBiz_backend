const mongoose = require("mongoose");

const bankMasterSchema = new mongoose.Schema(
    {
        bankCode: {
            type: Number,
            required: true,
        },
        bankName: {
            type: String,
            required: true,
        },
        branch: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("BankMaster", bankMasterSchema);