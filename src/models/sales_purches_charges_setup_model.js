const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SalesPurchesSchema = new Schema({
    partyName: {
        type: String,
        enum: ['Option 1', 'Option 2', 'Option 3'],
        required: true
    },
    srNo: {
        type: Number,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    radioOptions: {
        type: String,
        enum: ['amt vise', 'percent wise'],
        required: true
    },
    invoiceAmt: {
        type: Number,
        required: true
    },
    taxableAmt: {
        type: Number,
        required: true
    },
   Exxise: {
        type: Number,
        required: true
    },
    equation: {
        type: String,
        required: true
    },
    print: {
        type: Boolean,
        default: false
    },
    costing: {
        type: Boolean,
        required: true
    },
    want_post: {
        type: Boolean,
        required: true
    },
    post_to: {
        type: String,
        required: true
    }
},{
    timestamps:true
});

module.exports = mongoose.model("SalesPurches", SalesPurchesSchema);
