import { RxNode, BaseDriver } from "reactronic";
export declare class ElDriver<T extends Element, M = unknown> extends BaseDriver<El<T, M>> {
    allocate(node: RxNode<El<T, M>>): El<T, M>;
}
export type El<T = any, M = any> = {
    readonly node: RxNode<El<T, M>>;
    native: T;
    model: M;
    kind: ElKind;
    area: ElArea;
    widthGrowth: number;
    minWidth: string;
    maxWidth: string;
    heightGrowth: number;
    minHeight: string;
    maxHeight: string;
    contentAlignment: Align;
    elementAlignment: Align;
    contentWrapping: boolean;
    overlayVisible: boolean | undefined;
    useStyle(styleName: string, enabled?: boolean): void;
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
    toBounds = 0,
    toLeft = 1,
    toCenterX = 2,
    toRight = 3,
    toTop = 4,
    toCenterY = 8,
    toBottom = 12,
    toCenter = 10
}
export type ElasticSize = {
    cells?: number;
    min?: string;
    max?: string;
    growth?: number;
};
export type TrackSize = ElasticSize & {
    track?: string | number;
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
    private _widthGrowth;
    private _minWidth;
    private _maxWidth;
    private _heightGrowth;
    private _minHeight;
    private _maxHeight;
    private _contentAlignment;
    private _elementAlignment;
    private _contentWrapping;
    private _overlayVisible;
    private _hasStyles;
    constructor(node: RxNode<El<T, M>>);
    prepareForUpdate(): void;
    get isSection(): boolean;
    get isTable(): boolean;
    get isAuxiliary(): boolean;
    get kind(): ElKind;
    set kind(value: ElKind);
    get area(): ElArea;
    set area(value: ElArea);
    get widthGrowth(): number;
    set widthGrowth(value: number);
    get minWidth(): string;
    set minWidth(value: string);
    get maxWidth(): string;
    set maxWidth(value: string);
    get heightGrowth(): number;
    set heightGrowth(value: number);
    get minHeight(): string;
    set minHeight(value: string);
    get maxHeight(): string;
    set maxHeight(value: string);
    get contentAlignment(): Align;
    set contentAlignment(value: Align);
    get elementAlignment(): Align;
    set elementAlignment(value: Align);
    get contentWrapping(): boolean;
    set contentWrapping(value: boolean);
    get overlayVisible(): boolean | undefined;
    set overlayVisible(value: boolean | undefined);
    useStyle(styleName: string, enabled?: boolean): void;
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
    static applyMaxWidth<T extends Element>(element: El<T, any>, value: string): void;
    static heightGrowth<T extends Element>(element: El<T, any>, value: number): void;
    static minHeight<T extends Element>(element: El<T, any>, value: string): void;
    static maxHeight<T extends Element>(element: El<T, any>, value: string): void;
    static contentAlignment<T extends Element>(element: El<T, any>, value: Align): void;
    static elementAlignment<T extends Element>(element: El<T, any>, value: Align): void;
    static contentWrapping<T extends Element>(element: El<T, any>, value: boolean): void;
    static overlayVisible<T extends Element>(element: El<T, any>, value: boolean | undefined): void;
    static style<T extends Element>(element: El<T, any>, secondary: boolean, styleName: string, enabled?: boolean): void;
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
