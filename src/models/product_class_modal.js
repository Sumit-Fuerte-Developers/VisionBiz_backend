const mongoose = require("mongoose");

const ProductClassSchema = new mongoose.Schema(
    {
        Class_Name: {
            type: String,
            required: true
        },
        Chapter: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("ProductClass", ProductClassSchema);