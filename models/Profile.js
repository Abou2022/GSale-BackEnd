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
            required: true,
            references: {
                model: "user",
                key: "id",
                unique: false,
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            required: true,
            references: {
                model: "category",
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
            allowNull: true,
            // required: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
            // to validate w/ regex
        },
        imageURL: {
            type: DataTypes.STRING,
            allowNull: true,
        },
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
