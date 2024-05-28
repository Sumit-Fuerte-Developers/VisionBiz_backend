const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const DepartmentMasterSchema = new mongoose.Schema(
    {
        DeptCode: {
            type: Number,
            
        },
        DeptName: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true,
          },
          CompanyCode: {
            type: String,
            required: true,
          },
    },
    {
        timestamps: true
    }
);
DepartmentMasterSchema.plugin(AutoIncrement, { inc_field: 'DeptCode' });

// Create a composite index on Doc_No and SrNo to enforce uniqueness
DepartmentMasterSchema.index({ DeptCode: 1,}, { unique: true });


module.exports = mongoose.model("DeptMaster", DepartmentMasterSchema);