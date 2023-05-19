var express = require('express');
const register = require('./register/register');
const { fiveMinutesInMilliseconds } = require('./utils/constant');
const { scrapeAWSData } = require('./scrapper-setup/scraper/aws');
const { scrapeDatabaseData } = require('./scrapper-setup/scraper/database');

const app = express();
let callCount = 0;

const startScrapping = () => {
    scrapeDatabaseData(callCount)
    scrapeAWSData(callCount);
    setInterval(() => {
        callCount = callCount + 1;
        scrapeDatabaseData(callCount)
        scrapeAWSData(callCount);
    }, fiveMinutesInMilliseconds);
}

// To expose HTTP metrics endpoint so that we can get at the metrics
app.get('/metrics', function (req, res) {
    res.setHeader('Content-Type', register.contentType)
    register.metrics().then(data => res.status(200).send(data))
})

module.exports = { app, startScrapping };