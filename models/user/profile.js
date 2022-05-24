'use strict';

const { Schema, Types, model } = require('mongoose');
// mongoose.Promise = require('bluebird');
// const createError = require('http-errors');

const profileSchema = new Shema({
	userID: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId(), required: true, ref: 'user' },
	username: { type: String, required: true },
	image: String,
	country: { type: String, uppercase: true },
	state: { type: String, uppercase: true },
	accountBalance: { type: Number, default: 0 },
	status: { type: String, default: 'active' },
	createdOn: { type: Date, default: Date.now },
	lastLogin: { type: Date, default: Date.now },
	leagues: [{ type: Schema.Types.ObjectId, ref: 'league' }],
	groups: [{ type: Schema.Types.ObjectId, ref: 'group' }],
	tags: [String],
});

const Profile = module.exports = model('profile', profileSchema);

Profile.findByuserIDAndAddLeague = function (uid, lid) {
	console.log('findByuserIDAndAddLeague');

	return Profile.findOneAndUpdate({ userID: uid }, { $push: { leagues: lid } }, { new: true })
		.catch(err => {
			console.log("err: ", err);
			return Promise.reject();
			// Promise.reject(createError(404, err.message))
		});
};