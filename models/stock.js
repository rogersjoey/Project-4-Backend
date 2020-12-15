'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Stock.belongsToMany(models.User, {
        through: "userstocks",
        as:'users',
        foreignKey: 'stockId',
        otherKey: 'userId'
      })
    }
  };
  Stock.init({
    ticker: DataTypes.STRING,
    currentValue: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};