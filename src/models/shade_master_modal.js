const mongoose = require("mongoose");

const ShadeMasterSchema = new mongoose.Schema(
    {
        Shade_Name: {
            type: String,
            required: true
        },
        Colour: {
            type: String,
            // required: true
        },
        Grade: {
            type: String,
            // required: true
        },
        Rate: {
            type: Number,
            // required: true
            default: 0,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("ShadeMaster", ShadeMasterSchema);