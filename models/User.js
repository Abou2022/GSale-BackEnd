'use strict';

const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const isEmail = function (email) {
    var re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return re.test(email)
};

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
            validate: [isEmail, 'invalid email'],
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        // findHash: {
        //     type: String,
        //     unique: true
        //     // allowNull:false,
        // },
    }
);

userSchema.methods.checkPassword = async function (password) {
    try {
        const data = await bcrypt.compare(password, this.password);
        return data;
    } catch (err) {
        return null;
    }
};


userSchema.pre(['create', 'findOneAndUpdate'], async function () {
    try {
        console.log("pre create/update: ", this);
        if (this.email) {
            this.email = this.email.toLowerCase();
        }
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 5);
        }
    }
    catch (err) {
        console.log("pre create/update err: ", err);
    }
});

module.exports = model('user', userSchema);