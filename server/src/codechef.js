const axios = require('axios');
const cheerio = require('cheerio');
const util = require('./util');

const url = "https://www.codechef.com/contests";

async function getData(numTime) {
    return await axios.get(url).catch(error => {
        return error;
    })
}

getData().then(response => {
    console.log(response);
})

module.exports = getData;