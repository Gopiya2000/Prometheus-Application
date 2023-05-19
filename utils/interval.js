const { fiveMinutesInMilliseconds, tenMinutesInMilliseconds, fiveMinutes, tenMinutes } = require("./constant");

// Set the value for interval
const interval = (params) => {
    if (params.Interval === fiveMinutes || params.Interval === fiveMinutesInMilliseconds) {
        params.Interval = fiveMinutesInMilliseconds
        return params.Interval;
    }
    else if (params.Interval === tenMinutes || params.Interval === tenMinutesInMilliseconds) {
        params.Interval = tenMinutesInMilliseconds
        return params.Interval;
    }
    else {
        console.log("Check for the interval");
    }
}

module.exports = { interval }