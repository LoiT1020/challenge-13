const sequelize = require('../config/connection');
const { Category } = require('../models');

const categorydata = [
  {
    category_name:'graphic card'
  },
  {
    category_name:'mother board'
  },
  
  {
    category_name:'operating system'
  },
  
  {
    category_name:'cooling fan'
  },
  
  {
    category_name:'keyboard/keycap'
  },
  
  {
    category_name:'mouse'
  },
  
  
];

const seedCategories = () => Category.bulkCreate(categorydata, {individualHooks: true});

module.exports = seedCategories;
