import { Sequelize, Model, DataTypes } from 'sequelize'
import sequelize from '@config/database';

export const TokenAuth = sequelize.define("TokenAuth", {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});