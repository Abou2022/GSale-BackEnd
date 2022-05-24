'use strict';

const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
	homeTeam: { type: Schema.Types.ObjectId, required: true, ref: 'team' },
	awayTeam: { type: Schema.Types.ObjectId, required: true, ref: 'team' },
	dateTime: { type: Date, required: true },
	weight: { type: Number, default: 1 },
	homeScore: { type: Number, default: 0 },
	awayScore: { type: Number, default: 0 },
	status: { type: String, default: 'scheduled' },
	winner: { type: Schema.Types.ObjectId, ref: 'team', default: null },
	loser: { type: Schema.Types.ObjectId, ref: 'team', default: null },
	sportingEventID: { type: Schema.Types.ObjectId, required: true, ref: 'sportingEvent' },
	tags: [String],
});

module.exports = model('gameSchema', gameSchema);