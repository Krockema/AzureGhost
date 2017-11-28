process.env.server__port = process.env.PORT;
let ghost = require('ghost');

let appInsightsKey = process.env.APPINSIGHTS_INSTRUMENTATION_KEY;

if (appInsightsKey) {
    let appInsights = require("applicationinsights");

    appInsights.setup(appInsightsKey)
        .setAutoDependencyCorrelation(true)
        .setAutoCollectRequests(true)
        .setAutoCollectPerformance(true)
        .setAutoCollectExceptions(true)
        .setAutoCollectDependencies(true)
        .setAutoCollectConsole(true)
        .setUseDiskRetryCaching(true)
        .start();
}

ghost().then(function (ghostServer) {
    ghostServer.start();
});