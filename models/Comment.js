"use strict";

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    profile_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "profile",
        key: "id",
        unique: false,
      },
    },
    content: {
      type: DataTypes.TEXT,
      required: true,
      allowNull: false,
    },
    createdOn: {
      type: DataTypes.DATE,
      defaultValue: Date.now,
    },
    garageSaleEvent_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "garageSaleEvent",
        key: "id",
        unique: false,
      },
    },
    messageBoard_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "messageBoard",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    modelName: "comment",
  }
);

module.exports = Comment;
