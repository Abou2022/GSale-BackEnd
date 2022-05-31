'use strict';

const { Schema, Types } = require('mongoose');

const garageSaleEventSchema = new Schema(
	{
        eventName: {},
        startDate: {},
        endDate: {},
        createdOn: {},
        creatorId: {},
        location: {},
        description: {},
        imageURL: {},
        createdOn: {},
        eventStatus: {},
        buyers: {},
        sellers: {},
        comments: {},
        qrCode: {},
	}
);

module.exports = garageSaleEventSchema;