'use strict';

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class MessageBoard extends Model { }

MessageBoard.init(
    {
        id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        garageSaleEvent_id: {
            type: DataTypes.INTEGER,
            references: {
				model: 'garageSaleEvent',
				key: 'id',
				unique: false
			}
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: {
				model: 'comment',
				key: 'id',
				unique: false
			}
        },
    },
    {
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'messageBoard',
	}
);

module.exports = MessageBoard;