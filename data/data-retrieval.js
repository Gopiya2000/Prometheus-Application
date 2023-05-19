const { mongoose } = require("mongoose");
const { fiveMinutesInMilliseconds } = require("../utils/constant");
const { setValue } = require("./data-setting");

// Retrieve value for each params according to the condition
const getValue = async (gauge, params, callCount, response) => {
    switch (true) {
        case params.Namespace === 'Custom/Database' && params.MetricName === 'DBCount':
            const collections = await mongoose.connection.db.listCollections().toArray();
            const length = collections.length;
            setValue(gauge, length, params);
            break;
        case params.Namespace === 'Custom/Database' && params.MetricName === 'CollectionCount':
            let collectionName = params.Value;
            const Collection = await mongoose.connection.db.collection(collectionName);
            let count = await Collection.countDocuments()
            setValue(gauge, count, params);
            break;
        case callCount === 0 || (callCount % 2 === 0):
            const sortedDatapoints = response.Datapoints.sort((a, b) => b.Timestamp - a.Timestamp);
            const [latestDatapoint] = sortedDatapoints;
            setValue(gauge, latestDatapoint, params);
            break;
        case params.Interval === fiveMinutesInMilliseconds:
            const [datapoint] = response.Datapoints;
            setValue(gauge, datapoint, params);
            break;
        default:
            console.log("No data added");
            break;
    }
};

module.exports = { getValue };