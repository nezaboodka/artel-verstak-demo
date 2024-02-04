import { F } from "./util/Utils.js";
import { ObservableObject } from "./core/Mvcc.js";
export declare class Reaction<T> extends ObservableObject {
    protected action: F<T>;
    constructor(action: F<T>);
    protected launch(): T;
}
