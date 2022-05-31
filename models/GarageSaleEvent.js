'use strict';

const { Schema, Types } = require('mongoose');

const garageSaleEventSchema = new Schema(
	{
        eventName: {
            type: String,
			required: true,
            trim: true,
            max_length: 50,
            minlength: 1,
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
        createdOn: {
            type: Date,
            default: Date.now,
        },
        creatorId: {
            type: Types.ObjectId,
            ref: 'profile',
        },
        location: {
            type: String
            // google geocoder, what to put here?
        },
        description: {
            type: String,
			required: true,
            trim: true,
            max_length: 250,
            minlength: 1,
        },
        imageURL: {
            type: String,
        },
        createdOn: {
            type: Date,
            default: Date.now,
        },
        buyers: [{
            type: Types.ObjectId,
            ref: 'buyer',
        }],
        sellers: [{
            type: Types.ObjectId,
            ref: 'seller',
        }],
        comments: [{
            type: Types.ObjectId,
            ref: 'comment',
        }],
        qrCode: {
            type: String,
        },
        categories: [{
            type: String, enum: ["admin", "basic", "super"]
            // update to real categories
        }]
	}
);

module.exports = model('garageSaleEvent', garageSaleEventSchema);