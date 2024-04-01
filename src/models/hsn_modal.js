const mongoose = require("mongoose");

const HSNSchema = new mongoose.Schema(
    {
        hsn_code: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("HSN", HSNSchema);