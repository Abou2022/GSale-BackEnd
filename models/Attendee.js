"use strict";

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Attendee extends Model { }

Attendee.init(
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
        createdOn: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        // underscored: true,
        modelName: "attendee",
    }
);

module.exports = Attendee;
