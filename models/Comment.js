'use strict';

const { Schema, Types } = require('mongoose');

const commentSchema = new Schema(
	{
        userID: {},
        content: {},
        createdOn: {},
        messageBoardID: {},
	}
);

module.exports = commentSchema;