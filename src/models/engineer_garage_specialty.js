'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Engineer_Garage_Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Engineer_Garage_Specialty.init({
    engineerId: DataTypes.INTEGER,
    garageId: DataTypes.INTEGER,
    SpecialtyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Engineer_Garage_Specialty',
  });
  return Engineer_Garage_Specialty;
};