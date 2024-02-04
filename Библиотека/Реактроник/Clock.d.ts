import { ObservableObject } from "./core/Mvcc.js";
export declare class Clock extends ObservableObject {
    hour: number;
    minute: number;
    second: number;
    ms: number;
    interval: number;
    paused: boolean;
    constructor(interval?: number);
    pause(value?: boolean): void;
    private tick;
}
