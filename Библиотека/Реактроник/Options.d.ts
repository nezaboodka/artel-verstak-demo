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
    Plain = 0,
    Transactional = 1,
    Reactive = 2,
    Cached = 3
}
export declare enum Reentrance {
    PreventWithError = 1,
    WaitAndRestart = 0,
    CancelPrevious = -1,
    CancelAndWaitPrevious = -2,
    OverwritePrevious = -3,
    RunSideBySide = -4
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
