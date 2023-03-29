const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  User: sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    hashedPass: DataTypes.STRING,
  }),

  Post: sequelize.define("post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    recipeName: DataTypes.STRING,
    notes: DataTypes.STRING,
    imageUrl: DataTypes.TEXT
  }),

  Ingredients: sequelize.define("ingredients", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    ingredientName: DataTypes.STRING,
    ingredientAmount: DataTypes.STRING,
  }),
};
