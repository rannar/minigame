"use strict";
var WeatherData = (function () {
    function WeatherData() {
    }
    WeatherData.prototype.WeatherData = function () {
        this.observers = [];
    };
    WeatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
        var i = this.observers.indexOf(o);
    };
    WeatherData.prototype.notifyObservers = function () {
        for (var i = 0; i < this.observers.length; i++) {
            var observer = this.observers[i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    return WeatherData;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WeatherData;
//# sourceMappingURL=weatherdata.js.map