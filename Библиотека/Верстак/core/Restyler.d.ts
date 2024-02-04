export declare function restyler<T>(restyle: () => T): ObservablesStyles<T>;
export declare class ObservablesStyles<T> {
    private readonly restyle;
    constructor(restyle: () => T);
    protected cache(): T;
    get class(): T;
}
