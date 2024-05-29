const mongoose = require("mongoose");
const argon2 = require('argon2');

const CreateCompanySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        // unique: true
    },
    gstTin: {
        type: String,
        //unique: true,
        required: true
    },
    periodFromDate: {
        type: Date,
        required: true
    },
    periodToDate: {
        type: Date,
        required: true
    },
    addressLine1:  {
        type: String,
        required: true
    },
    addressLine2:  {
        type: String,
        // required: true
    },
    addressLine3:  {
        type: String,
        // required: true
    },
    city:  {
        type: String,
        required: true
    },
    state:  {
        type: String,
        required: true
    },
    pin:  {
        type: Number,
        required: true
    },
    tel1:  {
        type: Number,
        // required: true
    },
    tel2:  {
        type: Number,
        // required: true
    },
    mobile1:{ type: Number, unique: true, required: true },
    mobile2: { type: Number, unique: true,
        // required: true
    },
    girorPanNo: String,
    emailId:{ type: String, unique: true, required: true },
    webAddress: String,
    sntp: Number,
    port: Number,
    password: String,
    tdsReg: String,
    tdsCircle: String,
    typeOfCompany: String,
    image: String,
    imagePath: String,
    einvUser: String,
    einvPw: String,
    tf: String,
   
    
},{
    timestamps:true
});


CreateCompanySchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }

        // Generate a salt
        const salt = await argon2.genSalt(10);

        // Hash the password using the generated salt
        const hashedPassword = await argon2.hash(this.password, salt);

        // Replace the plain password with the hashed password
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
   
});
CreateCompanySchema.pre('findOneAndUpdate', async function(next) {
    try {
        const update = this.getUpdate();
        if (update.password) {
            const salt = await argon2.genSalt(10);
            const hashedPassword = await argon2.hash(update.password, salt);
            update.password = hashedPassword;
        }
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model("CreateCompany", CreateCompanySchema);
