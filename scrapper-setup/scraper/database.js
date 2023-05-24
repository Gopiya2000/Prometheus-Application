const paramsArray = require("../parameters/database");
const { createGauge } = require("../../utils/gauge-utils");
const { getValue } = require("../../data/data-retrieval");

// Scrape the data of the database parameters
const scrapeDatabaseData = async (callCount, register) => {
    try {
        for (const item of paramsArray) {
            let gaugeName = '';
            let gauge = await createGauge(item, gaugeName, register);
            await getValue(gauge, item, callCount);
        }
    } catch (error) {
        console.log("error", error);
    }
}

module.exports = { scrapeDatabaseData }