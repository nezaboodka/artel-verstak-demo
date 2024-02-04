import { MvccObject } from "./Mvcc.js";
export declare class MvccMap<K, V> extends MvccObject {
    private impl;
    constructor(isObservable: boolean, map: Map<K, V>);
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
    get size(): number;
    entries(): IterableIterator<[K, V]>;
    keys(): IterableIterator<K>;
    values(): IterableIterator<V>;
    [Symbol.toStringTag](): string;
    private get mutable();
}
export declare class TransactionalMap<K, V> extends MvccMap<K, V> {
    constructor();
    constructor(iterable?: Iterable<readonly [K, V]> | null);
}
export declare class ObservableMap<K, V> extends MvccMap<K, V> {
    constructor();
    constructor(iterable?: Iterable<readonly [K, V]> | null);
}
