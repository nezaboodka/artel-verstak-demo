import { Worker } from "../Worker.js";
import { ObservableObject } from "./Mvcc.js";
export declare abstract class Monitor extends ObservableObject {
    abstract readonly isActive: boolean;
    abstract readonly counter: number;
    abstract readonly workers: ReadonlySet<Worker>;
    abstract readonly duration: number;
    static create(hint: string, activationDelay: number, deactivationDelay: number, durationResolution: number): Monitor;
}
export declare class MonitorImpl extends Monitor {
    isActive: boolean;
    counter: number;
    workers: Set<Worker>;
    duration: number;
    readonly internals: {
        started: number;
        activationDelay: number;
        activationTimeout: undefined;
        deactivationDelay: number;
        deactivationTimeout: undefined;
        durationResolution: number;
    };
    enter(worker: Worker): void;
    leave(worker: Worker): void;
    static create(hint: string, activationDelay: number, deactivationDelay: number, durationResolution: number): MonitorImpl;
    static enter(mon: MonitorImpl, worker: Worker): void;
    static leave(mon: MonitorImpl, worker: Worker): void;
    private static doCreate;
    private static activate;
    private static deactivate;
    private static tick;
}
