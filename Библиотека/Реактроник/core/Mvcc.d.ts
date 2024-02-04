import { F } from "../util/Utils.js";
import { MemberOptions, Kind, Reentrance } from "../Options.js";
import { LoggingOptions, ProfilingOptions } from "../Logging.js";
import { MemberName, ObjectHandle, SeparationMode } from "./Data.js";
import { Journal } from "./Journal.js";
import { Monitor } from "./Monitor.js";
export declare abstract class MvccObject {
    protected constructor(observable: boolean);
    [Symbol.toStringTag](): string;
}
export declare abstract class TransactionalObject extends MvccObject {
    constructor();
}
export declare abstract class ObservableObject extends MvccObject {
    constructor();
}
export declare class OptionsImpl implements MemberOptions {
    readonly getter: Function;
    readonly setter: Function;
    readonly kind: Kind;
    readonly separation: SeparationMode;
    readonly order: number;
    readonly noSideEffects: boolean;
    readonly triggeringArgs: boolean;
    readonly throttling: number;
    readonly reentrance: Reentrance;
    readonly journal: Journal | undefined;
    readonly monitor: Monitor | null;
    readonly logging?: Partial<LoggingOptions>;
    static readonly INITIAL: Readonly<OptionsImpl>;
    constructor(getter: Function | undefined, setter: Function | undefined, existing: OptionsImpl, patch: Partial<OptionsImpl>, implicit: boolean);
}
export declare class Mvcc implements ProxyHandler<ObjectHandle> {
    static reactivityAutoStartDisabled: boolean;
    static repetitiveUsageWarningThreshold: number;
    static mainThreadBlockingWarningThreshold: number;
    static asyncActionDurationWarningThreshold: number;
    static sensitivity: boolean;
    static readonly transactional: Mvcc;
    static readonly observable: Mvcc;
    readonly isObservable: boolean;
    constructor(isObservable: boolean);
    getPrototypeOf(h: ObjectHandle): object | null;
    get(h: ObjectHandle, m: MemberName, receiver: any): any;
    set(h: ObjectHandle, m: MemberName, value: any, receiver: any): boolean;
    has(h: ObjectHandle, m: MemberName): boolean;
    defineProperty?(h: ObjectHandle, m: string | symbol, attributes: PropertyDescriptor): boolean;
    getOwnPropertyDescriptor(h: ObjectHandle, m: MemberName): PropertyDescriptor | undefined;
    ownKeys(h: ObjectHandle): Array<string | symbol>;
    static decorateData(isObservable: boolean, proto: any, member: MemberName): any;
    static decorateOperation(implicit: boolean, decorator: Function, options: Partial<MemberOptions>, proto: any, member: MemberName, pd: PropertyDescriptor | undefined): any;
    static decorateOperationParametrized(decorator: Function, options: Partial<MemberOptions>): F<any>;
    static acquireHandle(obj: any): ObjectHandle;
    static createHandleForMvccObject(proto: any, data: any, blank: any, hint: string, isObservable: boolean): ObjectHandle;
    static setProfilingMode(isOn: boolean, options?: Partial<ProfilingOptions>): void;
    static sensitive<T>(sensitivity: boolean, func: F<T>, ...args: any[]): T;
    static setHint<T>(obj: T, hint: string | undefined): T;
    static getHint<T>(obj: T): string;
    static createOperation: (h: ObjectHandle, m: MemberName, options: OptionsImpl) => F<any>;
    static rememberOperationOptions: (proto: any, m: MemberName, getter: Function | undefined, setter: Function | undefined, enumerable: boolean, configurable: boolean, options: Partial<MemberOptions>, implicit: boolean) => OptionsImpl;
}
