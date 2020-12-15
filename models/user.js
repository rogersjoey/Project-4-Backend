'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Stock, {
        through: "UserStocks",
        as: "stocks",
        foreignKey:'userId',
        otherKey:'stockId'});
    }
  };
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    monthlyGrowth: DataTypes.DECIMAL,
    growth: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};