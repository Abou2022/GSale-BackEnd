'use strict';

const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
	userID: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
	username: { type: String, required: true },
	image: String,
	messageBoardID: { type: Schema.Types.ObjectId, required: true, ref: 'messageBoard' },
	content: { type: String, required: true },
	createdOn: { type: Date, default: Date.now },
	tags: [String],
});

module.exports = model('comment', commentSchema);