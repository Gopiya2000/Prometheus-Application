const { Gauge } = require("prom-client");
const register = require("../register/register");

// Create new Gauge or use existing gauge
const createGauge = async (params, gaugeName) => {
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
}

module.exports = { createGauge }