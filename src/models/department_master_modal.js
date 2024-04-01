const mongoose = require("mongoose");

const DepartmentMasterSchema = new mongoose.Schema(
    {
        Department: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("DepartmentMaster", DepartmentMasterSchema);