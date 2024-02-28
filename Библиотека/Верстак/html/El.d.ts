import { RxNode, BaseDriver } from "../../Реактроник/api.js";
export type El<T = any, M = any> = {
    readonly node: RxNode<El<T, M>>;
    readonly index: number;
    native: T;
    model: M;
    kind: ElKind;
    area: ElArea;
    width: Range;
    height: Range;
    alignment: Align;
    alignmentInside: Align;
    stretchingStrengthX: number | undefined;
    stretchingStrengthY: number | undefined;
    contentWrapping: boolean;
    overlayVisible: boolean | undefined;
    splitView: SplitView | undefined;
    readonly style: CSSStyleDeclaration;
    useStylingPreset(stylingPresetName: string, enabled?: boolean): void;
};
export declare enum ElKind {
    section = 0,
    table = 1,
    note = 2,
    group = 3,
    part = 4,
    splitter = 5,
    cursor = 6,
    native = 7
}
export type ElCoords = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};
export declare enum Align {
    default = 0,
    left = 4,
    centerX = 5,
    right = 6,
    stretchX = 7,
    top = 32,
    centerY = 40,
    bottom = 48,
    stretchY = 56,
    centerXY = 45,
    stretchXY = 63
}
export type Range = {
    readonly min?: string;
    readonly max?: string;
};
export type MarkedRange = Range & {
    readonly marker?: string;
};
export type ElArea = undefined | string | {
    cellsOverWidth?: number;
    cellsOverHeight?: number;
};
export declare enum SplitView {
    horizontal = 0,
    vertical = 1
}
export declare class ElDriver<T extends Element, M = unknown> extends BaseDriver<El<T, M>> {
    allocate(node: RxNode<El<T, M>>): El<T, M>;
}
export declare class ElImpl<T extends Element = any, M = any> implements El<T, M> {
    readonly node: RxNode<El<T, M>>;
    maxColumnCount: number;
    maxRowCount: number;
    layoutInfo?: ElLayoutInfo;
    native: T;
    model: M;
    private _kind;
    private _area;
    private _coords;
    private _width;
    private _height;
    private _alignment;
    private _alignmentInside;
    private _stretchingStrengthX;
    private _stretchingStrengthY;
    private _contentWrapping;
    private _overlayVisible;
    private _splitView;
    private _hasStylingPresets;
    constructor(node: RxNode<El<T, M>>);
    prepareForUpdate(): void;
    get index(): number;
    get isSection(): boolean;
    get isTable(): boolean;
    get isAuxiliary(): boolean;
    get kind(): ElKind;
    set kind(value: ElKind);
    get area(): ElArea;
    set area(value: ElArea);
    get width(): Range;
    set width(value: Range);
    get widthPx(): {
        minPx: number;
        maxPx: number;
    };
    set widthPx(value: {
        minPx: number;
        maxPx: number;
    });
    get height(): Range;
    set height(value: Range);
    get heightPx(): {
        minPx: number;
        maxPx: number;
    };
    set heightPx(value: {
        minPx: number;
        maxPx: number;
    });
    get alignment(): Align;
    set alignment(value: Align);
    get alignmentInside(): Align;
    set alignmentInside(value: Align);
    get stretchingStrengthX(): number | undefined;
    set stretchingStrengthX(value: number | undefined);
    get stretchingStrengthY(): number | undefined;
    set stretchingStrengthY(value: number | undefined);
    get contentWrapping(): boolean;
    set contentWrapping(value: boolean);
    get overlayVisible(): boolean | undefined;
    set overlayVisible(value: boolean | undefined);
    get splitView(): SplitView | undefined;
    set splitView(value: SplitView | undefined);
    get style(): CSSStyleDeclaration;
    useStylingPreset(stylingPresetName: string, enabled?: boolean): void;
    protected children(onlyAfter?: ElImpl): Generator<ElImpl>;
    static childrenOf(node: RxNode<El>, onlyAfter?: El): Generator<ElImpl>;
    private rowBreak;
    private static applyKind;
    private static applyCoords;
    private static applyWidth;
    private static applyHeight;
    private static applyAlignment;
    private static applyStretchingStrengthX;
    private static applyStretchingStrengthY;
    private static applyContentWrapping;
    private static applyOverlayVisible;
    static applySplitView<T extends Element>(element: El<T, any>, value: SplitView | undefined): void;
    private static applyStylingPreset;
}
export declare class ElLayoutInfo {
    x: number;
    y: number;
    runningMaxX: number;
    runningMaxY: number;
    alignerX?: ElImpl;
    alignerY?: ElImpl;
    flags: ElLayoutInfoFlags;
    effectiveSizePx: number;
    offsetXpx: number;
    offsetYpx: number;
    containerSizeXpx: number;
    containerSizeYpx: number;
    constructor(prev: ElLayoutInfo);
}
declare enum ElLayoutInfoFlags {
    none = 0,
    ownCursorPosition = 1,
    usesRunningColumnCount = 2,
    usesRunningRowCount = 4,
    childrenRelayoutIsNeeded = 8
}
export declare const InitialElLayoutInfo: ElLayoutInfo;
export declare class CursorCommand {
    absolute?: string;
    columnShift?: number;
    rowShift?: number;
}
export declare class CursorCommandDriver extends ElDriver<Element, unknown> {
    constructor();
}
export declare const Constants: {
    element: string;
    partition: string;
    splitter: string;
    group: string;
    layouts: string[];
    keyAttrName: string;
    kindAttrName: string;
};
export {};
