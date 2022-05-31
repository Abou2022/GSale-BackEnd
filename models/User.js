'use strict';

const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
	{
        email: {},
        password: {},
        findHash: {},
	}
);

module.exports = userSchema;