import { LoggingOptions } from "./Logging.js";
import { SeparationMode } from "./core/Data.js";
export { LoggingLevel } from "./Logging.js";
export type { LoggingOptions, ProfilingOptions } from "./Logging.js";
import { Journal } from "./core/Journal.js";
import { Monitor } from "./core/Monitor.js";
export type SnapshotOptions = {
    readonly hint?: string;
    readonly separation?: SeparationMode;
    readonly journal?: Journal;
    readonly logging?: Partial<LoggingOptions>;
    readonly token?: any;
};
export type MemberOptions = {
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
};
export declare enum Kind {
    plain = 0,
    transactional = 1,
    reactive = 2,
    cached = 3
}
export declare enum Reentrance {
    preventWithError = 1,// fail with error if there is an existing call in progress (default)
    waitAndRestart = 0,// wait for existing call to finish and then restart reentrant one
    cancelPrevious = -1,// cancel previous call in favor of recent one
    cancelAndWaitPrevious = -2,// cancel previous call in favor of recent one (but wait until canceling is completed)
    overwritePrevious = -3,// allow previous to complete, but overwrite it with ignoring any conflicts
    runSideBySide = -4
}
export type AbstractReaction<T> = {
    readonly options: MemberOptions;
    readonly args: ReadonlyArray<any>;
    readonly result: T;
    readonly error: any;
    readonly stamp: number;
    readonly isUpToDate: boolean;
    configure(options: Partial<MemberOptions>): MemberOptions;
    markObsolete(): void;
    pullLastResult(args?: any[]): T | undefined;
};
