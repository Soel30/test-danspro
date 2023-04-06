import { Sequelize, Model, DataTypes } from 'sequelize'
import sequelize from '@config/database';
import { TokenAuth } from '@components/auth/model';

export const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(TokenAuth, {
  foreignKey: 'user_id',
  as: 'tokens',
});
