const seedCategories = require('./Category');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedCategories();
  console.log('--------------');

  process.exit(0);
};

seedAll();
