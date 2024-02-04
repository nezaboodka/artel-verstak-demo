export type LoggingOptions = {
    readonly enabled: boolean;
    readonly transaction: boolean;
    readonly operation: boolean;
    readonly step: boolean;
    readonly monitor: boolean;
    readonly read: boolean;
    readonly write: boolean;
    readonly change: boolean;
    readonly obsolete: boolean;
    readonly error: boolean;
    readonly warning: boolean;
    readonly gc: boolean;
    readonly color: number;
    readonly prefix: string;
    readonly margin1: number;
    readonly margin2: number;
};
export type ProfilingOptions = {
    repetitiveUsageWarningThreshold: number;
    mainThreadBlockingWarningThreshold: number;
    asyncActionDurationWarningThreshold: number;
    garbageCollectionSummaryInterval: number;
};
export declare const LoggingLevel: {
    readonly Off: LoggingOptions;
    readonly ErrorsOnly: LoggingOptions;
    readonly Reactions: LoggingOptions;
    readonly Transactions: LoggingOptions;
    readonly Operations: LoggingOptions;
    readonly Debug: LoggingOptions;
};
declare global {
    interface Window {
        rWhy: string;
        rBriefWhy: string;
    }
}
