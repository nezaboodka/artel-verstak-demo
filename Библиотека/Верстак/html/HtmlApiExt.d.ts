import { DataForSensor } from "./sensors/DataForSensor.js";
import { HtmlSensors } from "./sensors/HtmlSensors.js";
declare global {
    interface Element {
        sensors: HtmlSensors;
        dataForSensor: DataForSensor;
        resizeObserver?: ResizeObserver;
    }
}
