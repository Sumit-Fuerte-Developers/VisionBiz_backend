const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
    {
        Item_Name: {
            type: String,
            required: true
        },
        Item_Code: {
            type: Number,
            required: true
        },
        Item_Description: {
            type: String,
            required: true
        },
        Item_Specification: {
            type: String,
            required: true
        },
        Item_Quantity: {
            type: Number,
            required: true
        },
        Active: {
            type: Boolean,
            required: true
        }

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Item", ItemSchema);