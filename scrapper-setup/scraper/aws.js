const { CloudWatchClient, GetMetricStatisticsCommand } = require("@aws-sdk/client-cloudwatch");
const { createGauge } = require("../../utils/gauge-utils");
const { getValue } = require("../../data/data-retrieval");
const paramsArray = require("../parameters/aws");
const config = require("../../config");

// Scrape the data of the aws parameters
const scrapeAWSData = async (callCount, register) => {
    try {
        const client = new CloudWatchClient({ region: config.get('region') });
        const currentTime = new Date();
        paramsArray.forEach(async (item) => {
            const { params } = item;
            let gaugeName = '';
            params.StartTime = new Date(currentTime - params.Interval);
            params.EndTime = currentTime;
            const command = new GetMetricStatisticsCommand(item.params);
            const response = await client.send(command);
            let gauge = await createGauge(params, gaugeName, register);
            getValue(gauge, params, callCount, response);
        })
    } catch (error) {
        console.log("Error in scrapeAWSData:", error.message);
    }
};

module.exports = { scrapeAWSData };