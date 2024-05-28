const mongoose = require("mongoose");

const narrationMaster = new mongoose.Schema(
    {
        narration: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("NarrationMaster", narrationMaster);