const mongoose = require("mongoose");

const SubAccountMasterSchema = new mongoose.Schema(
    {
        Sub_Acct_Name: {
            type: String,
            required: true
        },
        Opening: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("SubAccountMaster", SubAccountMasterSchema);