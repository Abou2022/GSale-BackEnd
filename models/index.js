'use strict';

const Buyer = require('./Buyer');
const Comment = require('./Comment');
const GarageSaleEvent = require('./GarageSaleEvent');
const Profile = require('./Profile');
const Seller = require('./Seller');
const User = require('./User');

User.hasOne(Profile, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Profile.belongsTo(User, { foreignKey: 'user_id' });



User.hasMany(Comment);


module.exports = { Buyer, Comment, GarageSaleEvent, Profile, Seller, User };