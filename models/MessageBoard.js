'use strict';

const { Schema, Types } = require('mongoose');

const messageBoardSchema = new Schema(
	{
        garageSaleEventID: {},
        comments: {}
	}
);

module.exports = messageBoardSchema;