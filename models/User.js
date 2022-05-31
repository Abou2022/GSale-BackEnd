"use strict";

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
  async checkPassword(password) {
    try {
      const data = await bcrypt.compare(password, this.password);
      return data;
    } catch (err) {
      return null;
    }
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (data) => {
        data.email = data.email.toLowerCase();
        data.password = await bcrypt.hash(data.password, 5);
        return data;
      },
      beforeUpdate: async (data) => {
        if (data.email) {
          data.email = data.email.toLowerCase();
        }
        if (data.password) {
          data.password = await bcrypt.hash(data.password, 5);
        }
        return data;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
