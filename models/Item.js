"use strict";

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Item extends Model {}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "seller",
        key: "id",
        unique: false,
      },
    },
    imageURL: {
      type: DataTypes.TEXT,
      required: true,
    },
    imageDescription: {
      type: DataTypes.TEXT,
    },
    garageSaleEvent_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "garageSaleEvent",
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
    modelName: "item",
  }
);

module.exports = Item;
