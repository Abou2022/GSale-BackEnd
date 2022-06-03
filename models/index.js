"use strict";

const Attendee = require("./Attendee");
const Comment = require("./Comment");
const GarageSaleEvent = require("./GarageSaleEvent");
const Profile = require("./Profile");
const Vendor = require("./Vendor");
const User = require("./User");
const Item = require("./Item");
const Category = require("./Category");
// TO DO: attendee has many vendors, vendors have 0 attendees

// Attendee
Attendee.belongsTo(Profile, { foreignKey: "profile_id" });
Attendee.belongsTo(GarageSaleEvent, { foreignKey: "garageSaleEvent_id" });

// Category
Category.hasOne(Profile, { foreignKey: "category_id" });
Category.hasOne(GarageSaleEvent, { foreignKey: "category_id" });
Category.hasOne(Vendor, { foreignKey: "category_id" });

// Comment
Comment.belongsTo(Profile, { foreignKey: "profile_id" });
Comment.belongsTo(GarageSaleEvent, { foreignKey: "garageSaleEvent_id" });

// GarageSaleEvent
GarageSaleEvent.belongsTo(Profile, { foreignKey: "profile_id" });
GarageSaleEvent.belongsTo(Category, { foreignKey: "category_id", onDelete: "CASCADE" });

GarageSaleEvent.hasMany(Attendee, { foreignKey: "garageSaleEvent_id", onDelete: "CASCADE" });
GarageSaleEvent.hasMany(Comment, { foreignKey: "garageSaleEvent_id", onDelete: "CASCADE", });

GarageSaleEvent.hasMany(Vendor, { foreignKey: "garageSaleEvent_id", onDelete: "CASCADE", });

// Item
GarageSaleEvent.hasMany(Item, { foreignKey: "garageSaleEvent_id", onDelete: "CASCADE", });
Item.belongsTo(GarageSaleEvent, { foreignKey: "garageSaleEvent_id" });

Vendor.hasMany(Item, { foreignKey: "vendor_id", onDelete: "CASCADE", });
Item.belongsTo(Vendor, { foreignKey: "vendor_id" });

// Profile
Profile.hasMany(Attendee, { foreignKey: "profile_id", onDelete: "CASCADE" });
Profile.hasMany(Comment, { foreignKey: "profile_id", onDelete: "CASCADE" });
Profile.hasMany(GarageSaleEvent, { foreignKey: "profile_id" });
Profile.hasOne(Vendor, { foreignKey: "profile_id", onDelete: "CASCADE" });

Profile.belongsTo(Category, { foreignKey: "category_id", onDelete: "CASCADE" });
Profile.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

// User
User.hasOne(Profile, { foreignKey: "user_id", onDelete: "CASCADE" });

// Vendor

Vendor.belongsTo(Category, { foreignKey: "category_id", onDelete: "CASCADE" });
Vendor.belongsTo(Profile, { foreignKey: "profile_id", onDelete: "CASCADE" });
Vendor.belongsTo(GarageSaleEvent, { foreignKey: "garageSaleEvent_id" });

module.exports = {
    Attendee,
    Category,
    Comment,
    GarageSaleEvent,
    Item,
    Profile,
    Vendor,
    User,
};
