const app = require('./app')

app.listen(process.env.PORT, () => {
    console.log(`App Running on port ${process.env.PORT}...`);
});
