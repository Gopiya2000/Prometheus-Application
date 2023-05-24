const { Gauge } = require("prom-client");

// Create new Gauge or use existing gauge
const createGauge = async (params, gaugeName, register) => {
    try {
        if (register.getSingleMetric(params.Name)) {
            gaugeName = register.getSingleMetric(params.Name);
            return gaugeName;
        }
        else {
            gaugeName = new Gauge({
                name: params.Name,
                help: params.Help,
            });
            register.registerMetric(gaugeName);
            return gaugeName;
        }
    } catch (error) {
        console.log("Error in createGauge", error);
    }
}

module.exports = { createGauge }