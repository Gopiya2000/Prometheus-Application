const Prometheus = require('prom-client');

// Create new instance of prometheus registry to register and manage metrics
const register = new Prometheus.Registry();
register.setDefaultLabels({
    app: "application"
})
Prometheus.collectDefaultMetrics({ register })

module.exports = register;