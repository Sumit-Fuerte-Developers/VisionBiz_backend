const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductMasterSchema = new mongoose.Schema(
    {
        ItemCode: {
            type: String,
            maxlength:50,
            required: true
        },
        ItemName: {
            type: String,
            maxlength:50,
            required: true
        },
        ProdGroupCode: {
            type:String,
            ref: 'ProdGroupMaster',
          
        },
        ProdGroupName:{
            type:String,
            ref: 'ProdGroupMaster',
        },
        UOM: {
           type:String,
           maxlength:10
        },
        SalRate:{
            type:Number
        },
        PurRate:{
            type:Number
        },
        DR1:{
            type:String,
            maxlength:10
        },
        R1:{
            type:Number,
           
        },
        DR1:{
            type:String,
            maxlength:10
        },
        R1:{
            type:Number,
           
        },

        ListPrice:{
            type:Number
        },
        PackSize:{
            type:Number
        },
        MinQty:{
            type:Number
        },
        MinMax:{
            type:Number
        },
        ReOrderQty:{
            type:Number
        },
        LeadTime:{
            type:Number
        },
        DiscSale:{
            type:Number
        },
        DiscPur:{
            type:Number
        },
        Chapter:{
            type:String,
            maxlength:20
        },
        AssRate:{
            type:Number,
            
        },
        ExcisePer:{
            type:Number,
        },
        MarginPer:{
            type:Number
        },
        ProdClassCode:{
            type:String,
            ref: 'ProdClassMaster',
        },
        ProdClassName:{
            type:String,
            ref:'ProdClassMaster',
        },
        Location:{
            type:String,
            maxlength:15
        },
        PhotoPath:{
            type:String,
            maxlength:100
        },
        ProdMemo:{
            type:String,

        },
        MfgCode:{
            type:String,
            maxlength:50
        },
        MfgVariant:{
            type:String,
            maxlength:50
        },
        PriceListNo:{
            type:String,
            maxlength:50
        },
        SecondUnit:{
            type:String,
            maxlength:10
        },
        SecondSalRate:{
            type:Number
        },
        SecondPurRate:{
            type:Number
        },
        Maths:{
            type:String,
            maxlength:1
        },
        Conversion:{
            type:Number,
        },
        WantSecondQty:{
            type:Boolean,

        },
        TaxCode:{
            type:String,
            maxlength:3
        },
        PartyCode:{
            type:String,
            maxlength:5
        },
        MfgCode2:{
            type:String,
            maxlength:50

        },
        MfgCode3:{
            type:String,
            maxlength:50

        },
        MfgCode4:{
            type:String,
            maxlength:50

        },
        MfgCode5:{
            type:String,
            maxlength:50

        },
        Lock:{
            type:Boolean,
        },
        DiscA:{
            type: mongoose.Decimal128,
        },
        DiscB:{
            type: mongoose.Decimal128,
        },
        DiscC:{
            type: mongoose.Decimal128,
        },
        DiscD:{
            type: mongoose.Decimal128,
        },
        RatePer:{
            type: mongoose.Decimal128,
        },
        IGSTaxCode:{
            type:String,
            maxlength:3
        },
        LPRATE:{
            type: mongoose.Decimal128,
        },
        STKEFF:{
            type:Boolean
        },
        DiscE:{
            type: mongoose.Decimal128,
        },
        DiscF:{
            type: mongoose.Decimal128,
            },
        
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("ProductMaster", ProductMasterSchema);