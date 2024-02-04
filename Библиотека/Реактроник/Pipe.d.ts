import { ObservableObject } from "./core/Mvcc.js";
export declare abstract class Pipe<T> extends ObservableObject {
    abstract readonly capacity: number;
    abstract readonly count: number;
    abstract put(...items: T[]): void;
    abstract take(count: number): T[];
    static create<T>(hint?: string, capacity?: number): Pipe<T>;
}
