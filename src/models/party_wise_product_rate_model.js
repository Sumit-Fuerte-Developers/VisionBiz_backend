const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Party = require('./party_model'); // Import the Party model

const partywiseProductRateSchema = new Schema({
    fromParty: {
        type: Schema.Types.ObjectId,
        ref: 'Party',
        required: true
    },
    toParty: {
        type: Schema.Types.ObjectId,
        ref: 'Party',
        required: true
    },
    rate: Number,
    // other fields related to product rate
});

const PartywiseProductRate = mongoose.model('PartywiseProductRate', partywiseProductRateSchema);

module.exports = PartywiseProductRate;
