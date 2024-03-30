const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartySalesSchema = new Schema({
    partyname: { type: String, required: true },
},{
    timestamps:true
});
module.exports = mongoose.model("PartySales", PartySalesSchema);
