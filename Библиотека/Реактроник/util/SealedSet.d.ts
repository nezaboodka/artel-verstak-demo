import { Sealant, Sealed } from "./Sealant.js";
declare global {
    interface Set<T> {
        toMutable(): Set<T>;
        [Sealant.SealedType]: object;
    }
}
export declare abstract class SealedSet<T> extends Set<T> implements Sealed<Set<T>> {
    add(value: T): this;
    clear(): void;
    delete(value: T): boolean;
    [Sealant.CreateCopy](): Set<T>;
}
