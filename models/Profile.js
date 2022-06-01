"use strict";

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Profile extends Model { }

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
                unique: false,
            },
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            required: true,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        firstName: {
            type: DataTypes.STRING,
            // required: true,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            // to validate w/ regex
        },
        imageURL: {
            type: DataTypes.STRING,
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
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        // underscored: true,
        modelName: "profile",
    }
);

module.exports = Profile;
