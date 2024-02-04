import { F } from "./util/Utils.js";
import { AbstractReaction, MemberOptions, LoggingOptions, ProfilingOptions } from "./Options.js";
export declare class RxSystem {
    static why(brief?: boolean): string;
    static getReaction<T>(method: F<T>): AbstractReaction<T>;
    static pullLastResult<T>(method: F<Promise<T>>, args?: any[]): T | undefined;
    static configureCurrentOperation(options: Partial<MemberOptions>): MemberOptions;
    static getRevisionOf(obj: any): number;
    static takeSnapshot<T>(obj: T): T;
    static dispose(obj: any): void;
    static get reactivityAutoStartDisabled(): boolean;
    static set reactivityAutoStartDisabled(value: boolean);
    static get isLogging(): boolean;
    static get loggingOptions(): LoggingOptions;
    static setLoggingMode(isOn: boolean, options?: LoggingOptions): void;
    static setLoggingHint<T extends object>(obj: T, name: string | undefined): void;
    static getLoggingHint<T extends object>(obj: T, full?: boolean): string | undefined;
    static setProfilingMode(isOn: boolean, options?: Partial<ProfilingOptions>): void;
}
export declare function transaction<T>(action: F<T>, ...args: any[]): T;
export declare function unobs<T>(func: F<T>, ...args: any[]): T;
export declare function sensitive<T>(sensitivity: boolean, func: F<T>, ...args: any[]): T;
export declare function raw(proto: object, prop: PropertyKey): any;
export declare function obs(proto: object, prop: PropertyKey): any;
export declare function transactional(proto: object, prop: PropertyKey, pd: PropertyDescriptor): any;
export declare function reactive(proto: object, prop: PropertyKey, pd: PropertyDescriptor): any;
export declare function cached(proto: object, prop: PropertyKey, pd: PropertyDescriptor): any;
export declare function options(value: Partial<MemberOptions>): F<any>;
