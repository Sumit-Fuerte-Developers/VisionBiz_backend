const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartySchema = new Schema({
    partyName: { type: String, required: true },
    groupName: { type: Schema.Types.ObjectId, ref: 'PartyGroupMaster', required: true },
    openingBalance: { type: Number, default: 0 }
}, {
    timestamps: true
});

module.exports = mongoose.model('party', PartySchema);
