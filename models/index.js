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

Product.belongsToMany(ProductTag,{ 
    foreignKey: 'product_id'
});

ProductTag.belongsTo(Tag, {
    foreignKey: 'tag_id'
})

Tag.hasMany(ProductTag, foreignKey)





//export
module.exports = { Category, Product, Tag, ProductTag};