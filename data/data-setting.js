// Set the datapoint value to the Gauge
const setValue = (gauge, datapoint, params) => {
    if ((gauge && params.Namespace === 'Custom/Database')) {
        gauge.set(datapoint)
    }
    else if (gauge && datapoint) {
        const [selectedStatistic] = params.Statistics;
        const value = datapoint[selectedStatistic];
        gauge.set(value);
    }
    else {
        console.log("No value set");
    }
}

module.exports = { setValue };