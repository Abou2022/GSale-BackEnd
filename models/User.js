'use strict';

const { Schema } = require('mongoose');

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
            allowNull:false,
        },
        findHash: {
            type: String,
            // allowNull:false,
        },
	}
);

module.exports = model('user', userSchema);