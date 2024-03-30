const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartyPurchesSchema = new Schema({
    partyname: { type: String, required: true },
},{
    timestamps:true
});
module.exports = mongoose.model("PartyPurches", PartyPurchesSchema);
