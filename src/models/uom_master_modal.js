const mongoose = require("mongoose");

const UOMMasterSchema = new mongoose.Schema(
    {
        UOM: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("UOMMaster", UOMMasterSchema);