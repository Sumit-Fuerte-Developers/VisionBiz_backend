const mongoose = require("mongoose");

const StoreMasterSchema = new mongoose.Schema(
    {
        Store_Name: {
            type: String,
            required: true
        },
        Store_Group: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("StoreMaster", StoreMasterSchema);