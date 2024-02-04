import { Sealant, Sealed } from "./Sealant.js";
declare global {
    interface Array<T> {
        toMutable(): Array<T>;
        [Sealant.SealedType]: object;
    }
}
export declare abstract class SealedArray<T> extends Array<T> implements Sealed<Array<T>> {
    pop(): T | undefined;
    push(...items: T[]): number;
    sort(compareFn?: (a: T, b: T) => number): this;
    splice(start: number, deleteCount?: number): T[];
    unshift(...items: T[]): number;
    [Sealant.CreateCopy](): Array<T>;
    slice(start?: number, end?: number): T[];
}
