"use strict";

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Seller extends Model { }

Seller.init(
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
            required: true,
            allowNull: false,
        },
        garageSaleEvent_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "garageSaleEvent",
                key: "id",
                unique: false,
            },
            required: true,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        endTime: {
            type: DataTypes.TIME,
            required: true,
            allowNull: false,
        },
        startTime: {
            type: DataTypes.TIME,
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
        categories: {
            type: DataTypes.ENUM([
                "furniture",
                "kitchenware",
                "clothing",
                "electronic",
                "game",
                "sports equipment",
            ])
        },
        image: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
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
        modelName: "seller",
    }
);

module.exports = Seller;
