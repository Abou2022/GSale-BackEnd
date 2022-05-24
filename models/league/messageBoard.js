'use strict';

const { Schema, model } = require('mongoose');
// mongoose.Promise = require('bluebird');
// const createError = require('http-errors');
const Comment = require('./comment.js');

const messageBoardSchema = new Schema({
	leagueID: { type: Schema.Types.ObjectId, ref: 'league' },
	groupID: { type: Schema.Types.ObjectId, ref: 'group' },
	comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
	tags: [String],
});

const MessageBoard = module.exports = model('messageBoard', messageBoardSchema);

MessageBoard.findByIdAndAddComment = function (id, comment) {
	console.log('findbyidandaddcomment');

	return new Comment(comment).save()
		.then(newComment => {
			return MessageBoard.findByIdAndUpdate(id, { $push: { comments: newComment._id } })
				.then(() => newComment)
				.catch(err => {
					console.log("err: ", err);
					return Promise.reject();
					// Promise.reject(createError(404, err.message))
				});
		})
		.catch(err => {
			console.log("err: ", err);
			return Promise.reject();
			// Promise.reject(createError(404, err.message))
		});
};