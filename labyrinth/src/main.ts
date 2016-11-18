// import { LabyrinthImp } from './modules/model/labyrinthImp';
// import LabyrinthFactory from './modules/model/labyrinthFactory';

import WeatherData from './design/observer/weatherdata';
import CurrentConditionsDisplay from './design/observer/currentconditionsdisplay';

class Main {
    // public labyrinth: LabyrinthImp;
    init() {
        // this.labyrinth = LabyrinthFactory.createLabyrinth('rect');

        // 测试设计模式
        let weatherData: WeatherData = new WeatherData();
        let currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
        weatherData.setMeasurements(80, 65, 30.4);
        currentDisplay.display();
    }
}

window.onload = () => {
    let main = new Main();
    main.init();
};
