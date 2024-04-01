const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Party = require('./party_model'); // Import the Party model

const partywiseProductRateDiscountSchema = new Schema({
    fromParty: {
        type: Schema.Types.ObjectId,
        ref: 'Party',
        required: true
    },

});

const PartywiseProductRateDiscount = mongoose.model('PartywiseProductRateDiscount', partywiseProductRateDiscountSchema);

module.exports = PartywiseProductRateDiscount;
