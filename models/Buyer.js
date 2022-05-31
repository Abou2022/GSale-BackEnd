'use strict';

const { Schema, Types } = require('mongoose');

const buyerSchema = new Schema(
	{
        userID: {},
        garageSaleEventID: {},
        sellerIDs: {}
	}
);

module.exports = buyerSchema;