const { CloudWatchClient, GetMetricStatisticsCommand } = require("@aws-sdk/client-cloudwatch");
const { createGauge } = require("../../utils/gauge-utils");
const { getValue } = require("../../data/data-retrieval");
const { interval } = require("../../utils/interval");
const paramsArray = require("../parameters/aws");
const config = require('config');

// Scrape the data of the aws parameters
const scrapeAWSData = async (callCount) => {
    try {
        const client = new CloudWatchClient({ region: config.get('Region') });
        const currentTime = new Date();
        paramsArray.forEach(async (item) => {
            const { params } = item;
            let gaugeName = '';
            let intervalValue = interval(params)
            params.StartTime = new Date(currentTime - intervalValue);
            params.EndTime = currentTime;
            const command = new GetMetricStatisticsCommand(item.params)
            const response = await client.send(command)
            let gauge = await createGauge(params, gaugeName);
            getValue(gauge, params, callCount, response);
        });
    }
    catch (err) {
        console.log('err', err)
    }
}

module.exports = { scrapeAWSData }