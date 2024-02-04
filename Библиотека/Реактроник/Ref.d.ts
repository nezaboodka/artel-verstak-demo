export type BoolOnly<T> = Pick<T, {
    [P in keyof T]: T[P] extends boolean ? P : never;
}[keyof T]>;
export type GivenTypeOnly<T, V> = Pick<T, {
    [P in keyof T]: T[P] extends V ? P : never;
}[keyof T]>;
declare global {
    interface T extends Object {
        $$: {
            readonly [P in keyof T]-?: Ref<T[P]>;
        };
    }
}
export declare function refs<O extends object = object>(owner: O): {
    readonly [P in keyof O]-?: Ref<O[P]>;
};
export declare function toggleRefs<O extends object = object>(owner: O): {
    readonly [P in keyof BoolOnly<O>]: ToggleRef<O[P]>;
};
export declare function customToggleRefs<T, O extends object = any>(owner: O, value1: T, value2: T): {
    readonly [P in keyof GivenTypeOnly<O, T | any>]: ToggleRef<O[P]>;
};
export declare class Ref<T = any> {
    readonly owner: any;
    readonly name: string;
    readonly index: number;
    constructor(owner: any, name: string, index?: number);
    get variable(): T;
    set variable(value: T);
    unobs(): T;
    observe(): T;
    unobserve(): T;
    static sameRefs(v1: Ref, v2: Ref): boolean;
    static similarRefs(v1: Ref, v2: Ref): boolean;
}
export declare class ToggleRef<T = boolean> extends Ref<T> {
    readonly valueOn: T;
    readonly valueOff: T;
    constructor(owner: any, name: string, valueOn: T, valueOff: T);
    toggle(): void;
}
