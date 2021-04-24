// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: "",
  onDelete: "CASCADE",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag) - sequelize feature
Product.belongsToMany(Tags, {
  foreignKey: "",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: "",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
