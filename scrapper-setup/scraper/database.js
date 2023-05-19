const paramsArray = require("../parameters/database");
const { createGauge } = require("../../utils/gauge-utils");
const { getValue } = require("../../data/data-retrieval");

// Scrape the data of the database parameters
const scrapeDatabaseData = async (callCount) => {
    paramsArray.forEach(async (item) => {
        let gaugeName = '';
        let gauge = await createGauge(item, gaugeName);
        getValue(gauge, item, callCount);
    })
}

module.exports = { scrapeDatabaseData }