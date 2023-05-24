const express = require('express');
const Prometheus = require('prom-client');
const { fiveMinutesInMilliseconds } = require('./utils/constant');
const { scrapeAWSData } = require('./scrapper-setup/scraper/aws');
const { scrapeDatabaseData } = require('./scrapper-setup/scraper/database');
const { route } = require('./route');

const app = express();
let callCount = 0;

app.listen(4001)

// Create new instance of prometheus registry to register and manage metrics
const register = new Prometheus.Registry();
register.setDefaultLabels({
    app: "application"
})
Prometheus.collectDefaultMetrics({ register })

route(register,app);

const scrapeData = async () => {
    try {
        await scrapeDatabaseData(callCount, register)
        await scrapeAWSData(callCount, register);
        setInterval(() => {
            callCount = callCount + 5;
            scrapeDatabaseData(callCount, register)
            scrapeAWSData(callCount, register);
        }, fiveMinutesInMilliseconds);
    } catch (error) {
        console.log("Error", error);
    }
}
scrapeData();