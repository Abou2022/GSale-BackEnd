"use strict";

const Buyer = require("./Buyer");
const Comment = require("./Comment");
const GarageSaleEvent = require("./GarageSaleEvent");
const Profile = require("./Profile");
const Seller = require("./Seller");
const User = require("./User");
const MessageBoard = require("./MessageBoard");

// TO DO: buyer has many sellers, sellers have 0 buyers
// todo: garagesaleEvent now has profileId field
// seller has profileId field & garageSaleEventId field
// done: deleted garageSaleEvent_id, seller_id and buyer_id from profile &
// deleted seller_id and buyer_id from garage sale event - is this a good way?

User.hasOne(Profile, { foreignKey: "user_id", onDelete: "CASCADE" });
Profile.belongsTo(User, { foreignKey: "user_id" });

Profile.hasMany(Buyer, { foreignKey: "profile_id" });
Buyer.belongsTo(Profile);

GarageSaleEvent.hasMany(Buyer, { foreignKey: "garageSaleEvent_id" });
Buyer.belongsTo(GarageSaleEvent);

Profile.hasMany(Seller, { foreignKey: "profile_id" });
Seller.belongsTo(Profile);

GarageSaleEvent.hasMany(Seller, { foreignKey: "garageSaleEvent_id" });
Seller.belongsTo(GarageSaleEvent);

Profile.hasMany(Comment, { foreignKey: "profile_id" });
Comment.belongsTo(Profile);

MessageBoard.hasMany(Comment, { foreignKey: "messageBoard_id" });
Comment.belongsTo(MessageBoard);

MessageBoard.hasOne(GarageSaleEvent, { foreignKey: "messageBoard_id", onDelete: "CASCADE" });
GarageSaleEvent.belongsTo(MessageBoard, { foreignKey: "garageSaleEvent_id" });

Profile.hasMany(GarageSaleEvent, { foreignKey: "creator_id" });
GarageSaleEvent.belongsTo(Profile);

module.exports = {
    Buyer,
    Comment,
    GarageSaleEvent,
    MessageBoard,
    Profile,
    Seller,
    User,
};
