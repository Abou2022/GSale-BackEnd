'use strict';

const { Schema, Types } = require('mongoose');

const buyerSchema = new Schema(
    {
        profileId: {
            type: Types.ObjectId,
            ref: 'profile',
        },
        garageSaleEventId: {
            type: Types.ObjectId,
            ref: 'garageSaleEvent',
        },
        sellerIds: [{
            type: Types.ObjectId,
            ref: 'seller',
        }]
    }
);

module.exports = model('buyer', buyerSchema);