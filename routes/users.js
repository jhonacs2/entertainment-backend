const express = require('express');
const router = express.Router();
const x = require('x-ray');

router.get('/', function (req, res, next) {
    const scrape = x();

    const url = 'https://www.metacritic.com/movie/nimona';

    x(url, 'body@html')

    scrape(url, 'body@html', {
        title: '.product_page_title h1',
        year: '.product_page_title span',
        rating: 'div.rating span:last-child',
        type: '.section_title a'
    })((err, result) => {
        if (err) {
            console.log('Error:', err);
            res.status(500).send('Error when performing web scraping');
        } else {
            res.send(result);
        }
    });
});

module.exports = router;
