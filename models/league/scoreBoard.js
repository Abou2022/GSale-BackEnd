'use strict';

const { Schema, model } = require('mongoose');

const scoreBoardSchema = new Schema({
	userID: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
	leagueID: { type: Schema.Types.ObjectId, required: true, ref: 'league' },
	sportingEventID: { type: Schema.Types.ObjectId, required: true, ref: 'sportingEvent' },
	score: { type: Number, default: 0 },
});

module.exports = model('scoreBoard', scoreBoardSchema);