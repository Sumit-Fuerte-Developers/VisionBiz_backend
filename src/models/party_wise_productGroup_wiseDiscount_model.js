const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Party = require('./party_model'); 

const partywiseProductGroupwiseDiscountSchema = new Schema({
    Party: {
        type: Schema.Types.ObjectId,
        ref: 'Party',
        required: true
    },

});

const PartywiseProductGroupRateDiscount = mongoose.model('PartywiseProductgroupwiseDiscount', partywiseProductGroupwiseDiscountSchema);

module.exports = PartywiseProductGroupRateDiscount;
