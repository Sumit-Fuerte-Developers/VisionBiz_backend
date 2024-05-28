const mongoose = require("mongoose");

const AlternetAddSchema = new mongoose.Schema({
  PartyCode: {
    type: Number,
    ref: "AccMaster",
    maxlength: 5,
    // required: true,
  },
  SrNo: {
    type: Number,
   
  },
  Add1: {
    type: String,
    maxlength: 50,
  },
  Add2: {
    type: String,
    maxlength: 50,
  },
  Add3: {
    type: String,
    maxlength: 50,
  },
  City: {
    type: String,
    maxlength: 50,
  },
  Pin: {
    type: Number,
    maxlength: 15,
  },
  VatNo: {
    type: String,
    maxlength: 50,
  },
  CSTNo: {
    type: String,
    maxlength: 50,
  },
  PlantCode: {
    type: String,
    maxlength: 25,
  },
  OMS: {
    type: Boolean,
  },
  GST_TIN: {
    type: String,
    maxlength: 50,
  },
  STATECODE: {
    type: String,
    maxlength: 50,
  },
  Dist: {
    type: Number,
  },
}, {
  timestamps: true,
});

// Pre-save middleware to auto-increment SrNo
AlternetAddSchema.pre('save', async function (next) {
  try {
    if (this.isNew) { // Check if this document is being created for the first time
      const latestRecord = await this.constructor.findOne({}, {}, { sort: { 'SrNo': -1 } }); // Find the latest record based on SrNo
      if (latestRecord) {
        this.SrNo = latestRecord.SrNo + 1; // Increment SrNo by 1
      } else {
        this.SrNo = 1; // Set SrNo to 1 if no previous records exist
      }
    }
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('AlternetAddress', AlternetAddSchema);
