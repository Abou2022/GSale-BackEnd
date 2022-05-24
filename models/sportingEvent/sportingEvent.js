'use strict';

const { Schema, model } = require('mongoose');

const sportingEventSchema = new Schema({
	sportingEventName: { type: String, required: true },
	desc: { type: String, required: true },
	createdOn: { type: Date, default: Date.now },
	tags: [String],
});

module.exports = model('sportingEvent', sportingEventSchema);