"use strict";

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Buyer extends Model { }

Buyer.init(
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
        garageSaleEvent_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "garageSaleEvent",
                key: "id",
                unique: false,
            },
        },
        seller_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "seller",
                key: "id",
                unique: false,
            },
        },
        createdOn: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        // underscored: true,
        modelName: "buyer",
    }
);

module.exports = Buyer;
