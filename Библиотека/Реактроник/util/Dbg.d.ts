import { LoggingOptions } from "../Logging.js";
export declare function error(message: string, dump: Error | undefined): Error;
export declare function misuse(message: string, dump?: any): Error;
export declare function fatal(error: Error): Error;
export declare class Log {
    static DefaultLevel: LoggingOptions;
    static isOn: boolean;
    static global: LoggingOptions;
    static get opt(): LoggingOptions;
    static getMergedLoggingOptions: (local: Partial<LoggingOptions> | undefined) => LoggingOptions;
    static setMode(isOn: boolean, options?: LoggingOptions): void;
    static write(bar: string, tran: string, message: string, ms?: number, highlight?: string | undefined, dump?: any): void;
    static writeAs(options: Partial<LoggingOptions> | undefined, bar: string, tran: string, message: string, ms?: number, highlight?: string | undefined, dump?: any): void;
    static merge(t: Partial<LoggingOptions> | undefined, color: number | undefined, prefix: string | undefined, existing: LoggingOptions): LoggingOptions;
}
