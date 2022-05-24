'use strict';

const { Schema, model } = require('mongoose');
// mongoose.Promise = require('bluebird');
const MessageBoard = require('./messageBoard.js');
const Comment = require('./comment.js');
const ScoreBoard = require('./scoreBoard.js');
const UserPick = require('./userPick.js');

const leagueSchema = new Schema({
	leagueName: { type: String, required: true },
	sportingEventID: { type: Schema.Types.ObjectId, required: true, ref: 'sportingEvent' },
	owner: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
	ownerName: { type: String, required: true },
	privacy: { type: String, default: 'public', required: true },
	password: String,
	winner: { type: Schema.Types.ObjectId, ref: 'user' },
	status: { type: String, default: 'active' },
	users: [{ type: Schema.Types.ObjectId, ref: 'user' }],
	createdOn: { type: Date, default: Date.now },
	size: { type: Number, default: 1 },
	paidUsers: [{ type: Schema.Types.ObjectId, ref: 'user' }],
	tags: [String],
	scoring: String,
	poolSize: Number,
	motto: { type: String, required: true },
	image: String,
});

leagueSchema.pre('remove', function (next) {
	MessageBoard.findOne({ leagueID: this._id })
		.then(messageBoard => {
			return Comment.remove({ messageBoardID: messageBoard._id }).exec()
				.catch(next);
		})
		.then(() => {
			return MessageBoard.remove({ leagueID: this._id }).exec()
				.catch(next);
		})
		.then(() => {
			return ScoreBoard.remove({ leagueID: this._id }).exec()
				.catch(next);
		})
		.then(() => {
			return UserPick.remove({ leagueID: this._id }).exec()
				.catch(next);
		})
		.then(() => next())
		.catch(next);
});

module.exports = model('league', leagueSchema);