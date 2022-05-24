'use strict';

const createError = require('http-errors');

module.exports = (err, req, res, next) => {
	console.log('error-middleware');

	console.log('message:', err.message);
	console.log('name:', err.name);

	if (err.status) {
		res.status(err.status).send(err.name);
		next();
		return;
	}

	err.message = err.message.toLowerCase();

	if (err.name === 'validationError' || err.message.includes('validation failed')) {
		err = createError(400, err.message);
		res.status(err.status).send(err.name);
		next();
		return;
	}

	if (err.message.includes('unauthorized')) {
		err = createError(401, err.message);
		res.status(err.status).send(err.name);
		next();
		return;
	}


	if (err.name === 'CastError') {
		err = createError(404, err.message);
		res.status(err.status).send(err.name);
		next();
		return;
	}

	if (err.message.includes('duplicate key')) {
		err = createError(409, err.message);
		res.status(err.status).send(err.name);
		next();
		return;
	}


	err = createError(500, err.message);
	res.status(err.status).send(err.name);
	next();
};