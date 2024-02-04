import { ToggleRef } from "reactronic";
import { Sensor } from "./Sensor.js";
export type WindowModel = {
    popupToggle?: ToggleRef;
};
export declare class WindowSensor extends Sensor {
    activeData: unknown;
    previousActiveData: unknown;
    setActiveWindow(window: unknown, debugHint?: string): void;
}
