import { El } from "../El.js";
import { Sensor } from "./Sensor.js";
export type ResizedElement = {
    readonly borderBoxSize: ReadonlyArray<ResizeObserverSize>;
    readonly contentBoxSize: ReadonlyArray<ResizeObserverSize>;
    readonly contentRect: DOMRectReadOnly;
    readonly resizeData: any;
};
export declare class ResizeSensor extends Sensor {
    private readonly observer;
    resizedElements: Array<ResizedElement>;
    constructor();
    reset(): void;
    observeResizing(element: El<any, any>, value: boolean, boxSizing?: ResizeObserverBoxOptions): void;
    protected onResize(entries: Array<ResizeObserverEntry>): void;
    protected resize(entries: Array<ResizeObserverEntry>): void;
    protected doReset(): void;
}
