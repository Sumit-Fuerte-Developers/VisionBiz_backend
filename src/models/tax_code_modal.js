const mongoose = require("mongoose");

const texCodeSchema = new mongoose.Schema(
    {
        tex_code: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("TexCode", texCodeSchema);