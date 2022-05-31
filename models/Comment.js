'use strict';

const { Schema, Types } = require('mongoose');

const commentSchema = new Schema(
	{
        profileId: {},
        content: {},
        createdOn: {},
        messageBoardId: {},
	}
);

module.exports = commentSchema;