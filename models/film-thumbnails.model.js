const {DataTypes} = require("sequelize");
module.exports = (sequelize) => {
    return sequelize.define('film_thumbnails', {
        small: DataTypes.STRING(100),
        medium: DataTypes.STRING(100),
        lage: DataTypes.STRING(100)
    });
};
