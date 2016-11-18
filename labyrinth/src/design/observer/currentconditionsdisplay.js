"use strict";
var CurrentConditionsDisplay = (function () {
    function CurrentConditionsDisplay() {
    }
    CurrentConditionsDisplay.prototype.CurrentConditionsDisplay = function (weatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    };
    CurrentConditionsDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    };
    CurrentConditionsDisplay.prototype.log = ;
    return CurrentConditionsDisplay;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CurrentConditionsDisplay;
+this.temperature + 'F degrees and ' + this.humidity + '% humidity';
;
//# sourceMappingURL=currentconditionsdisplay.js.map