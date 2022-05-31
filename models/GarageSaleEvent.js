'use strict';

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class garageSaleEvent extends Model { }

garageSaleEvent.init(
	{
        id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        eventName: {
            type: DataTypes.STRING,
			required: true,
        },
        endTime: {
            type: DataTypes.DATE,
            required: true,
        },
        startTime: {
            type: DataTypes.DATE,
            required: true,
        },
        startDate: {
            type: DataTypes.DATE,
            required: true,
        },
        endDate: {
            type: DataTypes.DATE,
            required: true,
        },
        createdOn: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
        },
        creator_id: {
            type: DataTypes.INTEGER,
			references: {
				model: 'profile',
				key: 'id',
				unique: false
			}
        },
        location: {
            type: DataTypes.TEXT
            // google geocoder, what to put here?
        },
        description: {
            type: DataTypes.TEXT,
			required: true,
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
                model: 'buyer',
                key: 'id',
			}
        },
        seller_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'seller',
                key: 'id',
			}
        },
        messageBoard_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'messageBoard',
                key: 'id',
                unique: false
			}
        },
        categories: {
            type: DataTypes.ARRAY(DataTypes.ENUM({
              values: ["furniture", "kitchenware", "clothing", "electronic", "game", "sports equipment"]
            }))
        }
	},
    {
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'garageSaleEvent',
	}
);

module.exports = garageSaleEvent;