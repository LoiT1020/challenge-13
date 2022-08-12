const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create category
class Category extends Model {}

//fields/colums for Category model
Category.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  categoy_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;
