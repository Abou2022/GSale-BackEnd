'use strict';

const { Schema, Types } = require('mongoose');

const sellerSchema = new Schema(
	{
        profileId: {
            type: Types.ObjectId,
            ref: 'profile',
            required: true,
        },
        garageSaleEventId: {
            type: Types.ObjectId,
            ref: 'garageSaleEvent',
            required: true,
        },
        address: {
            type: String,
			required: true,
            trim: true,
        },
        endTime: {
            type: Date,
            required: true,
        },
        startTime: {
            type: Date,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        categories: [{
            type: String, enum: ["admin", "basic", "super"]
        }],
        images: [{
            type: String
        }],
        description: {
            type: String,
			required: true,
            trim: true,
            max_length: 250,
            minlength: 1,
        },
	}
);

module.exports = model('seller', sellerSchema);