const mongoose = require('mongoose');

const TypeTaxSchema = new mongoose.Schema({
    taxCode: { type: String, required: true },
    taxGroup: { type: String, required: true },
    taxDescription: { type: String, required: true },
    percentage: { type: Number, required: true },
    subCharge: { type: Number, required: true },
    shec: { type: Number, required: true },
    cessApplicable: { type: String, default: false },
    postChargeSrNo: { type: Number, required: true },
    postChargeSnAddTax: { type: Number, required: true },
    addTextApplication: { type: String, required: true },
    posted: { type: String, default: false },
    poPur: { type: String, required: true },
    addTextDescription: { type: String, required: true },
    postedACPurchase: { type: String, required: true },
    form: { type: Boolean, required: true },
    cost: { type: Boolean, default: false }
    
},{
    timestamps:true
});

module.exports = mongoose.model('TypeTax', TypeTaxSchema);
