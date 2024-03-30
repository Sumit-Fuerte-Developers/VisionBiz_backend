const mongoose = require("mongoose");

const DespatchFormSchema = new mongoose.Schema(
    {
        Desp_Code: {
            type: Number,
            required: true
        },
        Address1: {
            type: String,
            required: true
        },
        Address2: {
            type: String,
            required: true
        },
        Address3: {
            type: String,
            required: true
        },
        City: {
            type: String,
            required: true
        },
        Pin: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("DespatchForm", DespatchFormSchema);