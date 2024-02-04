import { DataForSensor } from "./DataForSensor.js";
import { Sensor } from "./Sensor.js";
import { WindowSensor } from "./WindowSensor.js";
export declare class HtmlElementSensor extends Sensor {
    readonly sourceElement: HTMLElement | SVGElement;
    readonly focusSensor?: any;
    readonly windowSensor?: WindowSensor;
    preventDefault: boolean;
    stopPropagation: boolean;
    constructor(sourceElement: HTMLElement | SVGElement, focusSensor?: any, windowSensor?: WindowSensor);
    protected getDefaultSensorData(): DataForSensor;
    protected setPreventDefaultAndStopPropagation(e: Event): void;
}
