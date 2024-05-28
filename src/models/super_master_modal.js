const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const superMasterSchema = new mongoose.Schema(
  {
    PartyCode: {
      type: Number,
      ref: "AccMaster",
      maxlength: 5,
      // required: true,
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
      default: 0,
    },
    State: {
      type: String,
      maxlength: 50,
    },
    AreaCode: {
      type: Schema.Types.ObjectId,
      ref: "AddAreaMaster",
    },
    // AreaName: {
    //   type: Schema.Types.ObjectId,
    //   ref: "AddAreaMaster",
    // },
    AreaName: {
      type: String,
      maxlength: 50,
    },
    Tel1: {
      type: Number,
      maxlength: 50,
      default: 0,
    },
    Tel2: {
      type: Number,
      maxlength: 50,
      default: 0,
    },
    Tel3: {
      type: Number,
      maxlength: 50,
      default: 0,
    },
    IntComNo: {
      type: Number,
      maxlength: 15,
      default: 0,
    },
    Mobile1: {
      type: Number,
      maxlength: 50,
      default: 0,
    },
    Mobile2: {
      type: Number,
      maxlength: 50,
      default: 0,
    },
    Fax1: {
      type: String,
      maxlength: 20,
    },
    Fax2: {
      type: String,
      maxlength: 20,
    },
    Email1: {
      type: String,
      maxlength: 50,
    },
    Email2: {
      type: String,
      maxlength: 50,
    },
    WebSite1: {
      type: String,
      maxlength: 50,
    },
    WebSite2: {
      type: String,
      maxlength: 50,
    },
    ContactPerson1: {
      type: String,
      maxlength: 50,
    },
    ContactPerson2: {
      type: String,
      maxlength: 50,
    },
    ContactPerson3: {
      type: String,
      maxlength: 50,
    },
    Designation1: {
      type: String,
      maxlength: 50,
    },
    Designation2: {
      type: String,
      maxlength: 50,
    },
    Designation3: {
      type: String,
      maxlength: 50,
    },
    SalesmanCode: {
      type: Number,
    },
    SalesmanName: {
      type: String,
      maxlength: 50,
    },
    BrokerCode: {
      type: Number,
    },
    BrokerName: {
      type: String,
      maxlength: 50,
    },
    PartyGroupCode: {
      type: Number,
    },
    PartyGroupName: {
      type: String,
      maxlength: 50,
    },
    TransporterCode: {
      type: Number,
    },
    TransporterName: {
      type: String,
      maxlength: 50,
    },
    CrPeriod: {
      type: Number,
      default: 0,
    },
    IntRatePer: {
      // type: mongoose.Decimal128,
      type: Number,
    },
    CrLimit: {
      type: Number,
      default: 0,
    },
    VATTin: {
      type: String,
      maxlength: 50,
    },
    CSTTin: {
      type: String,
      maxlength: 50,
    },
    CutTDS: {
      type: Boolean,
    },
    TDSCode: {
      type: Number,
      default: 0,
    },
    TDSDesc: {
      type: String,
      maxlength: 50,
    },
    PANNO: {
      type: String,
      maxlength: 50,
    },
    VendorCode: {
      type: String,
      maxlength: 50,
    },
    AlternateAdd: {
      type: Boolean,
    },
    PhotoPath: {
      type: String,
      maxlength: 100,
    },
    RefBy: {
      type: String,
      maxlength: 30,
    },
    DLNo1: {
      type: String,
      maxlength: 50,
    },
    DLNo2: {
      type: String,
      maxlength: 50,
    },
    AccMemo: {
      type: String,
      maxlength: 5000,
    },
    TaxCode: {
      type: String,
      maxlength: 3,
    },
    TaxDescription: {
      type: String,
      maxlength: 50,
    },
    BankCode: {
      type: String,
      maxlength: 8,
    },
    ECCNO: {
      type: String,
      maxlength: 50,
    },
    EXREGNO: {
      type: String,
      maxlength: 50,
    },
    DIVISION: {
      type: String,
      maxlength: 50,
    },
    COMMISSIONERATE: {
      type: String,
      maxlength: 50,
    },
    RANGE: {
      type: String,
      maxlength: 50,
    },
    LBT_NO: {
      type: String,
      maxlength: 50,
    },
    IFSC_CODE: {
      type: String,
      maxlength: 50,
    },
    BANK_NAME: {
      type: String,
      maxlength: 100,
    },
    BRANCH: {
      type: String,
      maxlength: 50,
    },
    BANK_AC_NO: {
      type: String,
      maxlength: 50,
    },
    OMS: {
      type: Boolean,
    },
    VatTinDt: {
      type: String,
      maxlength: 15,
    },
    CstTinDt: {
      type: String,
      maxlength: 15,
    },
    ServiceTax: {
      type: String,
      maxlength: 25,
    },
    CINNO: {
      type: String,
      maxlength: 150,
    },
    COUNTRY: {
      type: String,
      maxlength: 150,
    },
    GST_TIN: {
      type: String,
      maxlength: 50,
    },
    STATECODE: {
      type: String,
      maxlength: 50,
    },
    UNR: {
      type: Boolean,
    },
    DIST: {
      type: Number,
      default: 0,
    },
    Image:{
        data:{type: Buffer,}, // Store the video data as a Buffer
        contentType: String,
    }

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SuperMaster", superMasterSchema);
