import { MergeList, MergedItem, MergeListReader } from "../util/MergeList.js";
import { ObservableObject } from "./Mvcc.js";
export declare abstract class ObservableMergeList<T> extends ObservableObject implements MergeListReader<T> {
    protected abstract impl: MergeList<T>;
    get isStrict(): boolean;
    get count(): number;
    get addedCount(): number;
    get removedCount(): number;
    get isMergeInProgress(): boolean;
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
}
