export type GetMergedItemKey<T = unknown> = (item: T) => string | undefined;
export type MergeListReader<T> = {
    readonly isStrict: boolean;
    readonly count: number;
    readonly addedCount: number;
    readonly removedCount: number;
    readonly isMergeInProgress: boolean;
    lookup(key: string): MergedItem<T> | undefined;
    tryMergeAsExisting(key: string): MergedItem<T> | undefined;
    mergeAsAdded(instance: T): MergedItem<T>;
    mergeAsRemoved(item: MergedItem<T>): void;
    move(item: MergedItem<T>, after: MergedItem<T>): void;
    beginMerge(): void;
    endMerge(error?: unknown): void;
    resetAddedAndRemovedLists(): void;
    lastMergedItem(): MergedItem<T> | undefined;
    items(): Generator<MergedItem<T>>;
    addedItems(reset?: boolean): Generator<MergedItem<T>>;
    removedItems(reset?: boolean): Generator<MergedItem<T>>;
    isAdded(item: MergedItem<T>): boolean;
    isMoved(item: MergedItem<T>): boolean;
    isRemoved(item: MergedItem<T>): boolean;
    isActual(item: MergedItem<T>): boolean;
};
export type MergedItem<T> = {
    readonly instance: T;
    readonly index: number;
    readonly next?: MergedItem<T>;
    readonly prev?: MergedItem<T>;
    aux?: MergedItem<T>;
};
export declare class MergeList<T> implements MergeListReader<T> {
    readonly getKey: GetMergedItemKey<T>;
    private strict;
    private map;
    private tag;
    private current;
    private added;
    private removed;
    private lastNotFoundKey;
    private strictNextItem?;
    constructor(getKey: GetMergedItemKey<T>, strict?: boolean);
    get isStrict(): boolean;
    set isStrict(value: boolean);
    get count(): number;
    get addedCount(): number;
    get removedCount(): number;
    get isMergeInProgress(): boolean;
    lookup(key: string | undefined): MergedItem<T> | undefined;
    tryMergeAsExisting(key: string, resolution?: {
        isDuplicate: boolean;
    }, error?: string): MergedItem<T> | undefined;
    mergeAsAdded(instance: T): MergedItem<T>;
    mergeAsRemoved(item: MergedItem<T>): void;
    move(item: MergedItem<T>, after: MergedItem<T>): void;
    beginMerge(): void;
    endMerge(error?: unknown): void;
    resetAddedAndRemovedLists(): void;
    lastMergedItem(): MergedItem<T> | undefined;
    items(onlyAfter?: MergedItem<T>): Generator<MergedItem<T>>;
    addedItems(reset?: boolean): Generator<MergedItem<T>>;
    removedItems(reset?: boolean): Generator<MergedItem<T>>;
    isAdded(item: MergedItem<T>): boolean;
    isMoved(item: MergedItem<T>): boolean;
    isRemoved(item: MergedItem<T>): boolean;
    isActual(item: MergedItem<T>): boolean;
    markAsMoved(item: MergedItem<T>): void;
    static createItem<T>(instance: T): MergedItem<T>;
}
