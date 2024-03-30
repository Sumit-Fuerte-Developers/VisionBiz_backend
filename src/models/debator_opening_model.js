const mongoose = require('mongoose');

const DebtorOpeningSchema = new mongoose.Schema({
    partyName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Party', // Assuming 'Party' is the name of your party model
        required: true
    },
    opening: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('DebtorOpening', DebtorOpeningSchema);
