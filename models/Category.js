"use strict";

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Category extends Model { }

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        antiques: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },
        babyAndKid: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },
        clothing: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },
        electronics: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },
        farmAndGarden: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },
        furniture: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },
        kitchenware: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },
        moviesBooksAndMusic: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },
        sporting: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },
        toysAndGames: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },
        other: {
            type:DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        // underscored: true,
        modelName: "category",
    }
);

module.exports = Category;