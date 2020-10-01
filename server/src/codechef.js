const axios = require('axios');
const cheerio = require('cheerio');
const util = require('./util');

const url = "https://www.codechef.com/contests";

async function getData(numTime) {
    const html = await axios.get(url).catch(error => {
        return error;
    })
    // console.log(html);
    const $ = cheerio.load(html);
    console.log($("#primary-content").innerHTML);
    $("#primary-content > div > div:nth-child(19) > table > tbody > tr > td").each((index, element) => {
        console.log(2);
        console.log($(element).html());
    });
    return 1;
}

getData().then(response => {
    console.log(response);
})

module.exports = getData;

// https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb