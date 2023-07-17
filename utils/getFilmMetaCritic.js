const x = require('x-ray');
const scrape = x();

const getDataFilm = async (filmName, type) => {
    const url = `https://www.metacritic.com/${type}/${filmName}`;
    console.log(url)
    try {
        return await scrape(url, 'body@html', {
            title: '.product_page_title h1',
            year: '.product_page_title span',
            rating: 'div.rating span:last-child',
            type: '.section_title a'
        });

    } catch (err) {
        console.log('Error:', err);
        throw new Error('Error when performing web scraping');
    }
}

module.exports = {getDataFilm}
