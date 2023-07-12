const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('film', {
        title: DataTypes.STRING(50),
        year: DataTypes.INTEGER({length: 4}),
        category: DataTypes.STRING(10),
        rating: DataTypes.STRING(10)
    });
};

