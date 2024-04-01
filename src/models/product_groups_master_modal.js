const mongoose = require("mongoose");

const ProductGroupMasterSchema = new mongoose.Schema(
    {
        Group_Name: {
            type: String,
            required: true
        },
        Chapter: {
            type: String,
            required: true
        },
        Disc: {
            type: Number,
            required: true
        },
        Packing: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("ProductGroupMaster", ProductGroupMasterSchema);