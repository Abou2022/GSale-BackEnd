"use strict";

const Buyer = require("./Buyer");
const Comment = require("./Comment");
const GarageSaleEvent = require("./GarageSaleEvent");
const Profile = require("./Profile");
const Seller = require("./Seller");
const User = require("./User");
const MessageBoard = require("./MessageBoard");

User.hasOne(Profile, { foreignKey: "user_id", onDelete: "CASCADE" });
Profile.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Comment);

module.exports = {
  Buyer,
  Comment,
  GarageSaleEvent,
  MessageBoard,
  Profile,
  Seller,
  User,
};
