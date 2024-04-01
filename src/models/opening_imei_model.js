const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OpningIMEISchema = new mongoose.Schema({
    itemName:{ type: Schema.Types.ObjectId, ref: 'Item', required: true },
    opening: { type: Boolean, required: true },
    store: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('OpeningImei', OpningIMEISchema);
