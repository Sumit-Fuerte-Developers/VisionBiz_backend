const mongoose = require("mongoose");
const argon2 = require('argon2');

const saltRounds = 10;

const UserInfoSchema = new mongoose.Schema({
    emailId: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    admin_allowed: {
        type: Boolean,
        required: true
    },
    company_id: {
        type: Number,
    }
}, {
    timestamps: true
});

// Hashing the password before saving
UserInfoSchema.pre('save', function (next) {
    const user = this;

    // If password is not modified, move to the next middleware
    if (!user.isModified('password')) return next();

    // Generate a salt and hash the password
    argon2.hash(user.password, saltRounds, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

module.exports = mongoose.model("UsersInfo", UserInfoSchema);
