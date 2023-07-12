require('dotenv').config()

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.USERNAME_E,
    process.env.PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.film = require("./film.model")(sequelize);
db.filmThumbnails = require("./film-thumbnails.model")(sequelize);

db.film.hasOne(db.filmThumbnails, {foreignKey: 'title'})
db.filmThumbnails.belongsTo(db.film)

module.exports = db;
