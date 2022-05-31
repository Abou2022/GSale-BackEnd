'use strict';

const { Schema, Types, model } = require('mongoose');

const commentSchema = new Schema(
	{
        profileId: {
            type: Types.ObjectId,
            ref: 'profile',
        },
        content: {
            type: String,
			required: true,
            trim: true,
            max_length: 280,
            minlength: 1
        },
        createdOn: {
            type: Date,
            default: Date.now,
        },
        garageSaleEventId: {
            type: Types.ObjectId,
            ref: 'garageSaleEvent',
        }
	}
);

module.exports = model('comment', commentSchema);