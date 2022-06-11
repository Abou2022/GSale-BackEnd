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
        profile_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "profile",
                key: "id",
                unique: false,
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "category",
                key: "id",
                unique: false,
            },
        },
        eventName: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        startTime: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        endTime: {
            type: DataTypes.STRING,
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
            defaultValue: DataTypes.NOW,
        },
        address: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
        },
        lat: {
            type: DataTypes.FLOAT(10,6),
            required: true,
            allowNull: false,
        },
        lng: {
            type: DataTypes.FLOAT(10,6),
            required: true,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false,
        },
        imageURL: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        // underscored: true,
        modelName: "garageSaleEvent",
    }
);

module.exports = GarageSaleEvent;
