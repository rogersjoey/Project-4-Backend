'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserStocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserStocks.init({
    userId: DataTypes.INTEGER,
    stockId: DataTypes.INTEGER,
    initialValue: DataTypes.DECIMAL,
    finalValue: DataTypes.DECIMAL,
    amountInvested: DataTypes.DECIMAL,
    growth: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'UserStocks',
  });
  return UserStocks;
};