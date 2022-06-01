"use strict";

const Buyer = require("./Buyer");
const Comment = require("./Comment");
const GarageSaleEvent = require("./GarageSaleEvent");
const Profile = require("./Profile");
const Seller = require("./Seller");
const User = require("./User");

// TO DO: buyer has many sellers, sellers have 0 buyers
// todo: garagesaleEvent now has profileId field seller has profileId field & garageSaleEventId field

User.hasOne(Profile, { foreignKey: "user_id", onDelete: "CASCADE" });
Profile.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

Profile.hasMany(Buyer, { foreignKey: "profile_id", onDelete: "CASCADE" });
Buyer.belongsTo(Profile, { foreignKey: "profile_id" });

GarageSaleEvent.hasMany(Buyer, { foreignKey: "garageSaleEvent_id", onDelete: "CASCADE" });
Buyer.belongsTo(GarageSaleEvent, { foreignKey: "garageSaleEvent_id" });

Profile.hasMany(Seller, { foreignKey: "profile_id", onDelete: "CASCADE" });
Seller.belongsTo(Profile, { foreignKey: "profile_id" });

GarageSaleEvent.hasMany(Seller, { foreignKey: "garageSaleEvent_id", onDelete: "CASCADE" });
Seller.belongsTo(GarageSaleEvent, { foreignKey: "garageSaleEvent_id" });

GarageSaleEvent.hasMany(Comment, { foreignKey: "garageSaleEvent_id", onDelete: "CASCADE" });
Comment.belongsTo(GarageSaleEvent, { foreignKey: "garageSaleEvent_id" });

Profile.hasMany(Comment, { foreignKey: "profile_id", onDelete: "CASCADE" });
Comment.belongsTo(Profile, { foreignKey: "profile_id" });

Profile.hasMany(GarageSaleEvent, { foreignKey: "creator_id" });
GarageSaleEvent.belongsTo(Profile, { foreignKey: "creator_id" });

module.exports = {
    Buyer,
    Comment,
    GarageSaleEvent,
    Profile,
    Seller,
    User,
};