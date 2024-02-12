import { RxNode, BaseDriver } from "../../Реактроник/api.js";
export declare class ElDriver<T extends Element, M = unknown> extends BaseDriver<El<T, M>> {
    allocate(node: RxNode<El<T, M>>): El<T, M>;
}
export type El<T = any, M = any> = {
    readonly node: RxNode<El<T, M>>;
    native: T;
    model: M;
    kind: ElKind;
    area: ElArea;
    width: Range;
    widthJustMin: string;
    widthJustGrowth: number;
    height: Range;
    heightJustMin: string;
    heightJustGrowth: number;
    contentAlignment: Align;
    boundsAlignment: Align;
    contentWrapping: boolean;
    overlayVisible: boolean | undefined;
    readonly style: CSSStyleDeclaration;
    useStylingPreset(stylingPresetName: string, enabled?: boolean): void;
};
export declare enum ElKind {
    section = 0,
    table = 1,
    note = 2,
    group = 3,
    part = 4,
    cursor = 5,
    native = 6
}
export type ElCoords = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};
export declare enum Align {
    default = 16,
    stretch = 0,
    left = 1,
    centerX = 2,
    right = 3,
    top = 4,
    centerY = 8,
    bottom = 12,
    center = 10
}
export type Range = {
    readonly min?: string;
    readonly max?: string;
    readonly growth?: number;
};
export type MarkedRange = Range & {
    readonly marker?: string;
};
export type ElArea = undefined | string | {
    cellsOverWidth?: number;
    cellsOverHeight?: number;
};
export declare class ElImpl<T extends Element = any, M = any> implements El<T, M> {
    readonly node: RxNode<El<T, M>>;
    maxColumnCount: number;
    maxRowCount: number;
    cursorPosition?: CursorPosition;
    native: T;
    model: M;
    private _kind;
    private _area;
    private _coords;
    private _width;
    private _height;
    private _contentAlignment;
    private _boundsAlignment;
    private _contentWrapping;
    private _overlayVisible;
    private _hasStylingPresets;
    constructor(node: RxNode<El<T, M>>);
    prepareForUpdate(): void;
    get isSection(): boolean;
    get isTable(): boolean;
    get isAuxiliary(): boolean;
    get kind(): ElKind;
    set kind(value: ElKind);
    get area(): ElArea;
    set area(value: ElArea);
    get width(): Range;
    set width(value: Range);
    get widthJustMin(): string;
    set widthJustMin(value: string);
    get widthJustGrowth(): number;
    set widthJustGrowth(value: number);
    get height(): Range;
    set height(value: Range);
    get heightJustMin(): string;
    set heightJustMin(value: string);
    get heightJustGrowth(): number;
    set heightJustGrowth(value: number);
    get contentAlignment(): Align;
    set contentAlignment(value: Align);
    get boundsAlignment(): Align;
    set boundsAlignment(value: Align);
    get contentWrapping(): boolean;
    set contentWrapping(value: boolean);
    get overlayVisible(): boolean | undefined;
    set overlayVisible(value: boolean | undefined);
    get style(): CSSStyleDeclaration;
    useStylingPreset(stylingPresetName: string, enabled?: boolean): void;
    private rowBreak;
}
declare class CursorPosition {
    x: number;
    y: number;
    runningMaxX: number;
    runningMaxY: number;
    flags: CursorFlags;
    constructor(prev: CursorPosition);
}
declare enum CursorFlags {
    none = 0,
    ownCursorPosition = 1,
    usesRunningColumnCount = 2,
    usesRunningRowCount = 4
}
export declare class CursorCommand {
    absolute?: string;
    columnShift?: number;
    rowShift?: number;
}
export declare class CursorCommandDriver extends ElDriver<Element, unknown> {
    constructor();
}
export declare class Apply {
    static kind<T extends Element>(element: El<T, any>, value: ElKind): void;
    static coords<T extends Element>(element: El<T, any>, value: ElCoords | undefined): void;
    static widthGrowth<T extends Element>(element: El<T, any>, value: number): void;
    static minWidth<T extends Element>(element: El<T, any>, value: string): void;
    static maxWidth<T extends Element>(element: El<T, any>, value: string): void;
    static heightGrowth<T extends Element>(element: El<T, any>, value: number): void;
    static minHeight<T extends Element>(element: El<T, any>, value: string): void;
    static maxHeight<T extends Element>(element: El<T, any>, value: string): void;
    static contentAlignment<T extends Element>(element: El<T, any>, value: Align): void;
    static boundsAlignment<T extends Element>(element: El<T, any>, value: Align): void;
    static contentWrapping<T extends Element>(element: El<T, any>, value: boolean): void;
    static overlayVisible<T extends Element>(element: El<T, any>, value: boolean | undefined): void;
    static stylingPreset<T extends Element>(element: El<T, any>, secondary: boolean, styleName: string, enabled?: boolean): void;
}
export declare const Constants: {
    element: string;
    partition: string;
    group: string;
    layouts: string[];
    keyAttrName: string;
    kindAttrName: string;
};
export {};
