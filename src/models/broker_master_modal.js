const mongoose = require("mongoose");

const brokerMasterSchema = new mongoose.Schema(
    {
        broker: {
            type: String,
            required: true,
        },
        addressLine1: {
            type: String,
            required: true,
        },
        addressLine2: {
            type: String,
            // required: true,
        },
        addressLine3: {
            type: String,
            // required: true,
        },
        city: {
            type: String,
            required: true,
        },
        pin: {
            type: Number,
            required: true,
        },
        tel1: {
            type: Number,
            // required: true,
            default: 0,
        },
        tel2: {
            type: Number,
            // required: true,
            default: 0,
        },
        email: {
            type: String,
            required: true,
        },
        mobile1: {
            type: Number,
            required: true,
        },
        mobile2: {
            type: Number,
            // required: true,
            default: 0,
        },
        commission: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("BrokerMaster", brokerMasterSchema);