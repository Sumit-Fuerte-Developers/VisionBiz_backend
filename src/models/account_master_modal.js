const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

const AccountMasterSchema = new mongoose.Schema({
    FLAG: {
        type: String,
        maxlength: 1,
        // required:true
    },
    aGroup: {
        type: Number,ref: 'AccMaster',
        maxlength: 5,
        // required: true
    },
    GroupName: {
        type: String,ref: 'AccMaster',
        maxlength: 50,
        //required: true
    },
    PartyCode: {
        type: String,
        unique: true,
        
    },
    PartyName: {
        type: String,
        maxlength: 60
    },
    RGROUP: {
        type: Number,ref: 'AccMaster',
        maxlength: 5,
        //required: true
    },
    YR_OB:{type:Number},
    TOT_DR:{type:Decimal128},
    TOT_CR:{type:Decimal128},
    SCHEDULE:{
        type:String,
        maxlength:1
    },
    SUMMARY:{
        type:String,
        maxlength:1
    },
    BUDGET:{
        type:Number,
    },
    SummaryPrint:{  type: Boolean,
        default:false,
        // required:true
    },
    Principle:{
        type:Decimal128,
        
    },
    Interest:{
        type:Decimal128,
    },
    aLock:{
        type:Boolean,
    },
    DepPer:{
        type:Decimal128,
    },
    AccumulatedDep:{
        type:Decimal128,
    },
    tmpTot_Dr:{
        type:Decimal128,
    },
    tmpTot_Cr:{
        type:Decimal128,
    },
    tmpyr_ob:{
        type:Decimal128

    },
    userId:{
        type:String,
        // required:true
    },
    CompanyCode:{
        type:String,
        // required:true
    }
},
{
    timestamps: true
});
AccountMasterSchema.pre('save', async function(next) {
    if (!this.isNew) {
        // If the document is not new, do not increment PartyCode
        return next();
    }

    try {
        // Find the highest PartyCode value in the collection
        const highestParty = await this.constructor.findOne({}, 'PartyCode').sort('-PartyCode').exec();

        let nextPartyCode;
        if (highestParty && highestParty.PartyCode) {
            // Extract the numeric part of the highest PartyCode and increment by 1
            const highestCodeNumber = parseInt(highestParty.PartyCode);
            nextPartyCode = (highestCodeNumber + 1).toString().padStart(3, '0'); // Pad with leading zeros if necessary
        } else {
            // Set PartyCode to '001' if no existing PartyCode found
            nextPartyCode = '001';
        }

        this.PartyCode = nextPartyCode;
        next();
    } catch (error) {
        next(error);
    }
});


module.exports = mongoose.model("AccMaster", AccountMasterSchema);