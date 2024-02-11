import { LoggingOptions } from "../Logging.js";
import { MergeListReader, MergedItem } from "../util/MergeList.js";
import { MemberOptions } from "../Options.js";
export type Delegate<T> = (el: T, basis: () => void) => void;
export type SimpleDelegate<T = unknown, R = void> = (el: T) => R;
export declare enum Mode {
    default = 0,
    independentUpdate = 1,
    manualMount = 2
}
export declare enum Priority {
    realtime = 0,
    normal = 1,
    background = 2
}
export declare abstract class RxNode<E = unknown> {
    abstract readonly key: string;
    abstract readonly driver: RxNodeDriver<E>;
    abstract readonly declaration: Readonly<RxNodeDecl<E>>;
    abstract readonly level: number;
    abstract readonly owner: RxNode;
    abstract element: E;
    abstract readonly host: RxNode;
    abstract readonly children: MergeListReader<RxNode>;
    abstract readonly seat: MergedItem<RxNode<E>> | undefined;
    abstract readonly stamp: number;
    abstract readonly outer: RxNode;
    abstract readonly context: RxNodeContext | undefined;
    abstract priority?: Priority;
    abstract childrenShuffling: boolean;
    abstract strictOrder: boolean;
    abstract has(mode: Mode): boolean;
    abstract configureReactronic(options: Partial<MemberOptions>): MemberOptions;
    static readonly shortFrameDuration = 16;
    static readonly longFrameDuration = 300;
    static currentUpdatePriority: Priority;
    static frameDuration: number;
    static declare<E = void>(driver: RxNodeDriver<E>, declaration?: RxNodeDecl<E>, preset?: RxNodeDecl<E>): RxNode<E>;
    static get isFirstUpdate(): boolean;
    static get key(): string;
    static get stamp(): number;
    static get triggers(): unknown;
    static get priority(): Priority;
    static set priority(value: Priority);
    static get childrenShuffling(): boolean;
    static set childrenShuffling(value: boolean);
    static triggerUpdate(node: RxNode<any>, triggers: unknown): void;
    static triggerDeactivation(node: RxNode<any>): void;
    static updateNestedNodesThenDo(action: (error: unknown) => void): void;
    static markAsMounted(node: RxNode<any>, yes: boolean): void;
    static findMatchingHost<E = unknown, R = unknown>(node: RxNode<E>, match: SimpleDelegate<RxNode<E>, boolean>): RxNode<R> | undefined;
    static findMatchingPrevSibling<E = unknown, R = unknown>(node: RxNode<E>, match: SimpleDelegate<RxNode<E>, boolean>): RxNode<R> | undefined;
    static forEachChildRecursively<E = unknown>(node: RxNode<E>, action: SimpleDelegate<RxNode<E>>): void;
    static getDefaultLoggingOptions(): LoggingOptions | undefined;
    static setDefaultLoggingOptions(logging?: LoggingOptions): void;
}
export type RxNodeDecl<E = unknown> = {
    formula?: Delegate<E>;
    key?: string;
    mode?: Mode;
    activation?: Delegate<E>;
    deactivation?: Delegate<E>;
    triggers?: unknown;
    preset?: RxNodeDecl<E>;
};
export type RxNodeDriver<E = unknown> = {
    readonly name: string;
    readonly isPartitionSeparator: boolean;
    readonly predefine?: SimpleDelegate<E>;
    allocate(node: RxNode<E>): E;
    activate(node: RxNode<E>): void;
    mount(node: RxNode<E>): void;
    update(node: RxNode<E>): void | Promise<void>;
    deactivate(node: RxNode<E>, isLeader: boolean): boolean;
};
export type RxNodeContext<T extends Object = Object> = {
    value: T;
};
export declare abstract class BaseDriver<E = unknown> implements RxNodeDriver<E> {
    readonly name: string;
    readonly isPartitionSeparator: boolean;
    readonly predefine?: SimpleDelegate<E, void> | undefined;
    constructor(name: string, isPartitionSeparator: boolean, predefine?: SimpleDelegate<E, void> | undefined);
    abstract allocate(node: RxNode<E>): E;
    activate(node: RxNode<E>): void;
    mount(node: RxNode<E>): void;
    update(node: RxNode<E>): void | Promise<void>;
    deactivate(node: RxNode<E>, isLeader: boolean): boolean;
}
export declare class RxNodeVariable<T extends Object = Object> {
    readonly defaultValue: T | undefined;
    constructor(defaultValue?: T);
    set value(value: T);
    get value(): T;
    get valueOrUndefined(): T | undefined;
}
