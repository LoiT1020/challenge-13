//import
const Category = require("./Category");
const Product = require("./Product");
const ProductTag = require("./ProductTag");
const Tag = require("./Tag");

// Associations
Category.hasMany(Product,{
    foreignKey:'category_id'
});

Product.belongsTo(Category,{
    foreignKey:'category_id'
});

Product.belongsToMany(Tag,{ 
    through:'producttag', 
    foreignKey: 'product_id'
});

Tag.belongsToMany(Product, {
    through:'producttag',
    foreignKey: 'tag_id'
})







//export
module.exports = { Category, Product, Tag, ProductTag};