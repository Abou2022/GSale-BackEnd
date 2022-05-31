'use strict';

const { Schema, Types } = require('mongoose');

const buyerSchema = new Schema(
	{
        profileId: {},
        garageSaleEventId: {},
        sellerIds: {}
	}
);

module.exports = buyerSchema;