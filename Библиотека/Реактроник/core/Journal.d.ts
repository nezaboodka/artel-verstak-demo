import { ObservableObject } from "./Mvcc.js";
import { ObjectHandle, ObjectSnapshot, PatchSet } from "./Data.js";
export type Saver = (patch: PatchSet) => Promise<void>;
export declare abstract class Journal extends ObservableObject {
    abstract capacity: number;
    abstract readonly edits: ReadonlyArray<PatchSet>;
    abstract readonly unsaved: PatchSet;
    abstract readonly canUndo: boolean;
    abstract readonly canRedo: boolean;
    abstract edited(patch: PatchSet): void;
    abstract saved(patch: PatchSet): void;
    abstract undo(count?: number): void;
    abstract redo(count?: number): void;
    static create(): Journal;
}
export declare class JournalImpl extends Journal {
    private _capacity;
    private _edits;
    private _unsaved;
    private _position;
    get capacity(): number;
    set capacity(value: number);
    get edits(): ReadonlyArray<PatchSet>;
    get unsaved(): PatchSet;
    get canUndo(): boolean;
    get canRedo(): boolean;
    edited(p: PatchSet): void;
    saved(patch: PatchSet): void;
    undo(count?: number): void;
    redo(count?: number): void;
    static buildPatch(hint: string, items: Map<ObjectHandle, ObjectSnapshot>): PatchSet;
    static applyPatch(patch: PatchSet, undoing: boolean): void;
    mergePatchToUnsaved(patch: PatchSet, undoing: boolean): void;
}
