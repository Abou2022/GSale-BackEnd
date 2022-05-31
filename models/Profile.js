'use strict';

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Profile extends Model { }

Profile.init(
	{
        id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
			references: {
				model: 'user',
				key: 'id',
				unique: false
			}
        },
        email: {
            type: DataTypes.STRING,
			unique: true,
			required: true,
            allowNull: false,
            validate:{
                isEmail:true
            }
        },
        firstName: {
            type: DataTypes.STRING,
            // required: true,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        phoneNumber: {
            type: DataTypes.NUMBER,
            validate: {
				isNumeric: true
			}
        },
        imageURL: {
            type: DataTypes.STRING,
        },
        categories: {
            type: DataTypes.ARRAY(DataTypes.ENUM({
              values: ["furniture", "kitchenware", "clothing", "electronic", "game", "sports equipment"]
            }))
        },
        garageSaleEvent_id: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
			references: {
				model: 'garageSaleEvent',
				key: 'id',
				unique: false
			}
        },
        seller_id: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
			references: {
				model: 'seller',
				key: 'id',
				unique: false
			}
        },
        buyer_id: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
			references: {
				model: 'buyer',
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
		modelName: 'profile',
	}
);

module.exports = Profile;