'use strict';

const { Schema, Types } = require('mongoose');

const sellerSchema = new Schema(
	{
        userID: {},
        garageSaleEventID: {},
        address1: {},
        address2: {},
        city: {},
        state: {},
        zip: {},
        startDate: {},
        endDate: {},
        categories: {},
        images: {},
        description: {},
	}
);

module.exports = sellerSchema;