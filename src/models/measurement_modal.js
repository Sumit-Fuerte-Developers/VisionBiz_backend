const mongoose = require("mongoose");

const MeasurementSchema = new mongoose.Schema(
    {
        Measurement_name: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Measurement", MeasurementSchema);