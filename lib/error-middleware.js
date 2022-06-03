'use strict';

const createError = require('http-errors');

module.exports = (err, req, res, next) => {

    console.log('message:', err.message);
    console.log('name:', err.name);

    if (err.status) {
        res.status(err.status).send(err.name);
        return next();
    }

    err.message = err.message.toLowerCase();

    if (err.name === 'validationError' || err.message.includes('validation failed')) {
        err = createError(400, err.message);
        res.status(err.status).send(err.name);
        return next();
    }

    if (err.message.includes('unauthorized')) {
        err = createError(401, err.message);
        res.status(err.status).send(err.name);
        return next();
    }


    if (err.name === 'CastError') {
        err = createError(404, err.message);
        res.status(err.status).send(err.name);
        return next();
    }

    if (err.message.includes('duplicate key')) {
        err = createError(409, err.message);
        res.status(err.status).send(err.name);
        return next();
    }

    err = createError(500, err.message);
    res.status(err.status).send(err.name);
    next();
};