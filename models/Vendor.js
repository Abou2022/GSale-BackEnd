"use strict";

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Vendor extends Model { }

Vendor.init(
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
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "category",
                key: "id",
                unique: false,
            },
        },
        address: {
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
        modelName: "vendor",
    }
);

module.exports = Vendor;
