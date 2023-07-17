const express = require('express');
const router = express.Router();
const x = require('x-ray');
const {getDataFilm} = require('../utils/getFilmMetaCritic')


router.get('/', async function (req, res, next) {

    const dataFilm = await getDataFilm('nimona', 'movie');
    res.send(dataFilm)

});

module.exports = router;
