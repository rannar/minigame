"use strict";
var weatherdata_1 = require('./design/observer/weatherdata');
var currentconditionsdisplay_1 = require('./design/observer/currentconditionsdisplay');
var Main = (function () {
    function Main() {
    }
    Main.prototype.init = function () {
        var weatherData = new weatherdata_1.default();
        var currentDisplay = new currentconditionsdisplay_1.default(weatherData);
        weatherData.setMeasurements(80, 65, 30.4);
    };
    return Main;
}());
window.onload = function () {
    var main = new Main();
    main.init();
};
//# sourceMappingURL=main.js.map