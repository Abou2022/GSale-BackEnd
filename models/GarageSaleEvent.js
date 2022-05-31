'use strict';

const { Schema, Types } = require('mongoose');

const garageSaleEventSchema = new Schema(
	{
        eventName: {},
        startDate: {},
        endDate: {},
        createdOn: {},
        creatorID: {},
        location: {},
        description: {},
        imageURL: {},
        createdOn: {},
        eventStatus: {},
        buyers: {},
        sellers: {},
        messageBoardID: {},
        qrCode: {},
	}
);

module.exports = garageSaleEventSchema;