const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create category
class Tag extends Model {}

//fields/colums for Category model
Tag.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tag_name: {
    type: DataTypes.STRING,
  },
 
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag'
  });
  
 module.exports = Tag;