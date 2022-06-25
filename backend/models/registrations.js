'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class registrations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  registrations.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    timestamps:false,
    sequelize,
    modelName: 'registrations',
  });
  return registrations;
};