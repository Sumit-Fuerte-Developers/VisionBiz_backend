const mongoose = require("mongoose");

const TDSSchema = new mongoose.Schema({
    tdsDesc: {
        type: String,
        required: true
    },
    limit: {
        type: Number,
        required: true
    },
    tdsPercentage: {
        type: Number,
        required: true
    },
    basicTdsPercentage: {
        type: Number,
        required: true
    },
    surchargePercentage: {
        type: Number,
        required: true
    },
    cessPercentage: {
        type: Number,
        required: true
    },
    shec: {
        type: Number,
        required: true
    },
    postedAccount: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("TDSMaster", TDSSchema);
