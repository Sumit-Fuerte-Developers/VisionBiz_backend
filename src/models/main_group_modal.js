// const mongoose = require("mongoose");

// const mainGroup = new mongoose.Schema({
//     mainGroup: {type:String, required:true},// Name of the node
//     parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'mainGroup' }, // Reference to the parent node's _id
//     children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'mainGroup' }]
// },
//     {
//         timestamps: true
//     }
// );

// module.exports = mongoose.model("mainGroup", mainGroup);