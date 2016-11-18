import Observer from './observer';
import Subject from './subject';
import DisplayElement from './displayelement';
export default class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature;
    private humidity;
    private weatherData: Subject;

    public CurrentConditionsDisplay(weatherData: Subject) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }

    public update(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    public display() {
        console.log('Current conditions: ', + this.temperature + 'F degrees and ' + this.humidity + '% humidity');
    }
}
