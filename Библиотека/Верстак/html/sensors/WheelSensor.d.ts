import { BasePointerSensor } from "./BasePointerSensor.js";
export declare class WheelSensor extends BasePointerSensor {
    target: unknown;
    deltaX: number;
    deltaY: number;
    constructor(element: HTMLElement | SVGElement);
    listen(enabled?: boolean): void;
    reset(): void;
    protected onWheel(e: WheelEvent): void;
    protected doWheel(e: WheelEvent): void;
    protected doReset(): void;
    protected updateSensorData(e: WheelEvent): void;
}
