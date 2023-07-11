const app = require('./app')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.USERNAME_E,
    process.env.PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully')
}).catch((error) => {
    console.error('Unable to connect to the database', error)
})

app.listen(process.env.PORT, () => {
    console.log(`App Running on port ${process.env.PORT}...`);
});

