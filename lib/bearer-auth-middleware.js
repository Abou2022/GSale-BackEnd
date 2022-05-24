'use strict';

const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const User = require('../model/user/user.js');

module.exports = (req, res, next) => {
	console.log('bearer/token auth');

	let { authorization } = req.headers;
	if (!authorization)
		return next(createError(401, 'AUTH ERROR: authorization header required'));

	let token = authorization.split('Bearer ')[1];
	if (!token)
		return next(createError(401, 'AUTH ERROR: not bearer auth'));

	jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
		if (err) return next(err);

		User.findOne({ findHash: decoded.token })
			.then(user => {
				if (!user)
					throw createError(401, 'AUTH ERROR: user not found');
				req.user = user;
				next();
			})
			.catch(err => next(createError(401, err.message)));
	});
};