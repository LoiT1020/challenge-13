const sequelize = require('../config/connection');
const { Product } = require('../models');

const productdata = [
  {
    product_name:'pokemon keycap',
    price: 35.5,
    stock:1000,
    category_id:5
  },
  {
    product_name: 'GTX3060 ti',
    price: 355.50,
    stock:5,
    category_id:1
  },
  {
    product_name: 'Corsair LL120 RGB',
    price: 99.75,                       
    category_id:4
  },
  {
    product_name:'D&D keycap',
    price:50.00,
    stock:1000,
    category_id:5,
  },
  {
    product_name: 'GTX3080 ti',
    price: 575.50,
    stock:10,
    category_id:1
  },
  {
    product_name: 'Noctua NF-A12x25 PWM ',
    price: 112.75,  
    stock:30,                     
    category_id:4
  },
  {
    product_name: 'GTX3070 ti',
    price: 355.50,
    stock:25,
    category_id:1
  },
  {
    product_name: 'SteelSeries - Rival 3',
    price: 35.20,
    stock:20,
    category_id:6
  },
  {
    product_name: 'Asus B550-F ROG Strix Gaming AMD AM4 ATX',
    price: 199.90,
    stock:50,
    category_id:2
  },
  {
    product_name: 'Intel Core i7 gen 12nd',
    price: 359.90,
    stock:50,
    category_id:3
  },
  
];

const seedProduct = () => Product.bulkCreate(productdata, {individualHooks: true});

module.exports = seedProduct;
