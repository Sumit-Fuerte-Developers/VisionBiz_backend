const mongoose = require("mongoose");

const AccountMasterSchema = new mongoose.Schema({
    Account: {
        type: String,
        enum: ['option1', 'option2', 'option3'],
        required: true
    },
    Group: {
        type: String,
        required: true
    },
    Opening: {
        type: String,
        enum: ['option4', 'option5', 'option6'],
        required: true
    },
    Closing: {
        type: String,
        required: true
    },
    Budget: {
        type: Number,
        required: true
    },
    Schedule: {
        type: Boolean,
        required: true
    },
    ECC_NO: {
        type: Number,
        required: true
    },
    EX_Reg_NO: {
        type: Number,
        required: true
    },
    Division: {
        type: String,
        required: true
    },
    Commission_Rate: {
        type: Number,
        required: true
    },
    Range: {
        type: Number,
        required: true
    },
    LBT_NO: {
        type: Number,
        required: true
    },
    IFSC_Code: {
        type: Number,
        required: true
    },
    Bank_Name: {
        type: String,
        required: true
    },
    Branch: {
        type: String,
        required: true
    },
    Bank_Account_No: {
        type: Number,
        unique: true,
        required: true,
    },
    OMS: {
        type: Boolean,
        required: true
    },
    UNR: {
        type: Boolean,
        required: true
    },
    Service_Tax: {
        type: String,
        required: true
    },
    CINNO: {
        type: Number,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    GST_TIN: {
        type: Number,
        required: true
    },
    STATE_CODE: {
        type: Number,
        required: true
    },
    Distance: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("AccountMaster", AccountMasterSchema);