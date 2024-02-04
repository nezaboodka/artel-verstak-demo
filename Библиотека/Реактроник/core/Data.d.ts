export { Meta } from "./Meta.js";
export type AbstractChangeset = {
    readonly id: number;
    readonly hint: string;
    readonly timestamp: number;
    readonly sealed: boolean;
};
export declare class ValueSnapshot<T = any> {
    content: T;
    observers?: Set<Observer>;
    get isOperation(): boolean;
    get originSnapshotId(): number | undefined;
    constructor(content: T);
}
export type SeparationMode = boolean | "isolated" | "disposal";
export type Observer = {
    readonly order: number;
    readonly observables: Map<ValueSnapshot, Subscription> | undefined;
    readonly obsoleteSince: number;
    hint(nop?: boolean): string;
    markObsoleteDueTo(observable: ValueSnapshot, m: MemberName, changeset: AbstractChangeset, h: ObjectHandle, outer: string, since: number, reactive: Array<Observer>): void;
    relaunchIfNotUpToDate(now: boolean, nothrow: boolean): void;
};
export type MemberName = PropertyKey;
export type Subscription = {
    readonly memberHint: string;
    readonly usageCount: number;
};
export declare class ObjectSnapshot {
    readonly changeset: AbstractChangeset;
    readonly former: {
        snapshot: ObjectSnapshot;
    };
    readonly data: any;
    readonly changes: Set<MemberName>;
    readonly conflicts: Map<MemberName, ObjectSnapshot>;
    constructor(changeset: AbstractChangeset, former: ObjectSnapshot | undefined, data: object);
    get revision(): number;
    get disposed(): boolean;
    set disposed(value: boolean);
}
export declare class ObjectHandle {
    private static generator;
    readonly id: number;
    readonly data: any;
    readonly proxy: any;
    head: ObjectSnapshot;
    editing?: ObjectSnapshot;
    editors: number;
    hint: string;
    constructor(data: any, proxy: any, handler: ProxyHandler<ObjectHandle>, head: ObjectSnapshot, hint: string);
    static getHint(obj: object, full: boolean): string | undefined;
}
export type PatchSet = Map<object, Map<MemberName, ValuePatch>>;
export type ValuePatch = {
    memberName: MemberName;
    patchKind: "update" | "add" | "remove";
    freshValue: any;
    formerValue: any;
};
