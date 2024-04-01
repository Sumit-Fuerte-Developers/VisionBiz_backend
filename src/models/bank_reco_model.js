const mongoose = require('mongoose');

const BankReconciliationOpeningSchema = new mongoose.Schema({
    bankName: { type: String, required: true },
    opening: { type: Boolean, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('BankRecoOpening', BankReconciliationOpeningSchema);
