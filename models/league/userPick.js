'use strict';

const { Schema, model } = require('mongoose');

const userPickSchema = new Schema({
	userID: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
	leagueID: { type: Schema.Types.ObjectId, required: true, ref: 'league' },
	gameID: { type: Schema.Types.ObjectId, required: true, ref: 'gameSchema' },
	pick: { type: Schema.Types.ObjectId, ref: 'team' },
	correct: { type: Boolean, default: false },
	gameTime: { type: Date, required: true },
});

module.exports = model('userPick', userPickSchema);