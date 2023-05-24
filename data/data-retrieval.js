const { oneMinuteInMilliseconds } = require("../utils/constant");
const { setValue } = require("./data-setting");
const DatabaseHandler = require("./database");

// Retrieve value for each params according to the condition
const getValue = async (gauge, params, callCount, response) => {
    const databaseHandler = new DatabaseHandler();
    let Interval = params.Interval / oneMinuteInMilliseconds;
    switch (true) {
        case params.Namespace === 'Custom/Database':
            databaseHandler.connect(params, gauge)
            break;
        case callCount === 0 || (callCount % Interval === 0):
            const sortedDatapoints = response.Datapoints.sort((a, b) => b.Timestamp - a.Timestamp);
            const [latestDatapoint] = sortedDatapoints;
            setValue(gauge, latestDatapoint, params);
            break;
        default:
            console.log("No data added");
            break;
    }
};

module.exports = { getValue };