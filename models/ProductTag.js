const { INTEGER } = require("sequelize");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create category
class ProductTag extends Model {}

//fields/colums for Category model
ProductTag.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "product",
      key: " id",
    },
  },
  tag_id:{
    type: DataTypes/INTEGER,
    references: {
        model:'tag',
        key:'id'
    }
  }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'producttag'
  }
);

 module.exports = ProductTag;