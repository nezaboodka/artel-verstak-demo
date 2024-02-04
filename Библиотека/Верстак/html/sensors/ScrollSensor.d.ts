import { HtmlElementSensor } from "./HtmlElementSensor.js";
export declare class ScrollSensor extends HtmlElementSensor {
    x: number;
    y: number;
    constructor(element: HTMLElement | SVGElement);
    listen(enabled?: boolean): void;
    reset(): void;
    protected onScroll(e: Event): void;
    protected doScroll(e: Event): void;
    protected doReset(): void;
    protected updateSensorData(e: Event): void;
}
