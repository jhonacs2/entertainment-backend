const express = require('express');
const router = express.Router();
const {getDataFilm} = require('../utils/getFilmMetaCritic')
const db = require("../models");


router.get('/', async function (req, res, next) {
    const {film} = req.body;

    const dataFilm = await db.film.findOne({where: {title: film}});
    if (dataFilm === null) {
        const filmName = film.split(' ').join('-')
        const {title, year, rating, type} = await getDataFilm(filmName, 'movie');
        const dataFilm = {
            title,
            year,
            rating: rating.trim(),
            category: type.split(' ')[0].toLowerCase()
        }
        const filmBd = await db.film.create(dataFilm);
        res.send(filmBd)
    } else {
        res.status(200).send(dataFilm)
    }
});

module.exports = router;
