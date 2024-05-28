const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountGroupSchema = new mongoose.Schema({
    GroupDescription: {
        type: String,
        required: true
    },
    mainGroup: {
        type: String,
        // type: String,
        ref: 'accountGroup',
        default:null
    },

    groupIfReverse: {
        type: Schema.Types.ObjectId,
        // type: String,
        ref: 'accountGroup',
        default:null
        
    },
    schedule: { type: Boolean,default:false },
    lock: { type: Boolean, default: false }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("accountGroup", AccountGroupSchema);