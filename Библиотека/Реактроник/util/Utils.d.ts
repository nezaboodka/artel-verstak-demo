export type F<T> = (...args: any[]) => T;
export declare class Utils {
    static freezeSet<T>(obj?: Set<T>): Set<T> | undefined;
    static freezeMap<K, V>(obj?: Map<K, V>): Map<K, V> | undefined;
    static copyAllMembers(source: any, target: any): any;
}
export declare function UNDEF(...args: any[]): never;
export declare function all(promises: Array<Promise<any>>): Promise<any[]>;
export declare function pause<T>(timeout: number): Promise<T>;
export declare function emitLetters(n: number): string;
export declare function objectHasMember<T>(obj: any, member: string): obj is T;
export declare function getCallerInfo(prefix: string): string;
