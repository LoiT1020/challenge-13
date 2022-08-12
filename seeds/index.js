const seedCategories = require('./Category');
const seedProduct= require('./Product')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedCategories();
  console.log('--------------');
  await seedProduct();
  console.log('--------------')

  process.exit(0);
};

seedAll();
