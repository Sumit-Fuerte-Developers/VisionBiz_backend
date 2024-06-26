const mongoose = require('mongoose');

const DebtorOpeningSchema = new mongoose.Schema({
    partyName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'party',
        required: true
    },
    opening: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('debtorOpening', DebtorOpeningSchema);
