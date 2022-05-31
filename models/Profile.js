'use strict';

const { Schema, Types, model } = require('mongoose');

const profileSchema = new Schema(
	{
        userId: {
            type: Types.ObjectId,
            ref: 'user',
        },
        email: {
            type: String,
			unique: true,
			required: true,
            trim: true,
        },
        firstName: {
            type: String,
            // required: true,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        phoneNumber: {
            type: Number,
            trim: true,
            // add validation
        },
        imageURL: {
            type: String,
            trim: true,
        },
        intersts: [{
            type: String, enum: ["admin", "basic", "super"]
        }],
        garageSaleEvents: [{
            type: Types.ObjectId,
            ref: 'garageSaleEvent',
        }],
        selling: [{
            type: Types.ObjectId,
            ref: 'seller',
        }],
        buying: [{
            type: Types.ObjectId,
            ref: 'buyer',
        }],
        emailValidated: {
            type: Boolean,
            default: false,
        },
	}
);

module.exports = model('profile', profileSchema);