"use strict";

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class GarageSaleEvent extends Model { }

GarageSaleEvent.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        eventName: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        endTime: {
            type: DataTypes.DATE,
            required: true,
            allowNull: false,
        },
        startTime: {
            type: DataTypes.DATE,
            required: true,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.DATE,
            required: true,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATE,
            required: true,
            allowNull: false,
        },
        createdOn: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
        },
        creator_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "profile",
                key: "id",
                unique: false,
            },
        },
        location: {
            type: DataTypes.TEXT,
            // google geocoder, what to put here?
        },
        description: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false,
        },
        imageURL: {
            type: DataTypes.STRING,
        },
        createdOn: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
        },
        buyer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "buyer",
                key: "id",
            },
        },
        seller_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "seller",
                key: "id",
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
        categories: {
            type:
                DataTypes.ENUM([
                    "furniture",
                    "kitchenware",
                    "clothing",
                    "electronic",
                    "game",
                    "sports equipment",
                ],
                )
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "garageSaleEvent",
    }
);

module.exports = GarageSaleEvent;
