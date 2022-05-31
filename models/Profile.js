'use strict';

const { Schema, Types } = require('mongoose');

const profileSchema = new Schema(
	{
        userID: {},
        email: {},
        firstName: {},
        lastName: {},
        phoneNumber: {},
        imageURL: {},
        intersts: {},
        garageSaleEvents: {},
        selling: {},
        buying: {},
        emailValidated: {},
        
	}
);

module.exports = profileSchema;