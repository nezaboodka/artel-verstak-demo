import { Sealant, Sealed } from "./Sealant.js";
declare global {
    interface Map<K, V> {
        toMutable(): Map<K, V>;
        [Sealant.SealedType]: object;
    }
}
export declare abstract class SealedMap<K, V> extends Map<K, V> implements Sealed<Map<K, V>> {
    clear(): void;
    delete(key: K): boolean;
    set(key: K, value: V): this;
    [Sealant.CreateCopy](): Map<K, V>;
}
