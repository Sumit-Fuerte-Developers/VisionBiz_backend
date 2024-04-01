const mongoose = require('mongoose');

const UpdatepartyWIseDataSchema = new mongoose.Schema({
    partyName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'party',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('UpdatepartyWiseData', UpdatepartyWIseDataSchema);
