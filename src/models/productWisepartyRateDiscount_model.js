const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Party = require('./party_model'); 

const productWisepartyRateDiscountSchema = new Schema({
    Party: {
        type: Schema.Types.ObjectId,
        ref: 'Party',
        required: true
    },

});

const productWisepartyRateDiscount= mongoose.model('productWisePartyRateDiscount', productWisepartyRateDiscountSchema);

module.exports = productWisepartyRateDiscount;
