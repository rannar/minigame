import Subject from './subject';
import Observer from './observer';
export default class WeatherData implements Subject{
    private observers : Array<Observer>;
    private temperature;
    private humidity;
    private pressure;

    public WeatherData() {
        this.observers = [];
    }

    public registerObserver(o: Observer) {
        this.observers.push(o);
    }

    //暂不实现
    public removeObserver(o: Observer) {
        let i = this.observers.indexOf(o);
    }

    public notifyObservers() {
        for( let i = 0; i < this.observers.length; i++) {
            let observer: Observer = this.observers[i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    public measurementsChanged() {
        this.notifyObservers();
    }

    public setMeasurements(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}
