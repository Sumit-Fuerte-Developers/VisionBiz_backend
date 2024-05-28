const mongoose = require("mongoose");

const TDSSchema = new mongoose.Schema({
    tdsDesc: {
        type: String,
        required: true
    },
    limit: {
        type: Number,
        // required: true
        default: 0,
    },
    tdsPercentage: {
        type: Number,
        // required: true
        default: 0,
    },
    basicTdsPercentage: {
        type: Number,
        // required: true
        default: 0,
    },
    surchargePercentage: {
        type: Number,
        // required: true
        default: 0,
    },
    cessPercentage: {
        type: Number,
        // required: true
        default: 0,
    },
    shec: {
        type: Number,
        // required: true
        default: 0,
    },
    postedAccount: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("TDSMaster", TDSSchema);
