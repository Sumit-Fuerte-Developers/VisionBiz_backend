const mongoose = require("mongoose");

const AddTextMasterSchema = new mongoose.Schema({
    taxCode: {
        type: String,
        required: true,
      },
      taxGroup: {
        type: String,
        required: true,
      },
      taxDescription: {
        type: String,
        required: true,
      },
      percentage: {
        type: Number,
        required: true,
      },
      subcharge: {
        type: Number,
        required: true,
      },
      shec: {
        type: Number,
        required: true,
      },
      cessApplicable: {
        type: String,
        required: true,
      },
      postChgSrNo: {
        type: Number,
        required: true,
      },
      postChgSnAddTax: {
        type: Number,
        required: true,
      },
      addTextApplication: {
        type: String,
        required: true,
      },
      posted: {
        type: String,
        required: true,
      },
      poPur: {
        type: String,
        required: true,
      },
      addTaxDescription: {
        type: String,
        required: true,
      },
      postedACPurchase: {
        type: String,
        required: true,
      },
      cost: {
        type: Boolean,
        default: false,
      },
      form: {
        type: Boolean,
        default: false,
      }

},{
    timestamps:true
});

module.exports = mongoose.model("addTextMaster", AddTextMasterSchema);

