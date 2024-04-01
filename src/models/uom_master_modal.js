const mongoose = require("mongoose");

const UOMMasterSchema = new mongoose.Schema(
    {
        UOM_Desc: {
            type: String,
            required: true
        },
        UQC: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("UOMMaster", UOMMasterSchema);