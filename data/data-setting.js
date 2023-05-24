// Set the datapoint value to the Gauge
const setValue = (gauge, datapoint, params) => {
    try {
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
    } catch (error) {
        console.log("Error in setValue", error);
    }
}

module.exports = { setValue };