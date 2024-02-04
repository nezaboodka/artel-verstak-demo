export type DataForSensor = {
    context?: unknown;
    window?: unknown;
    focus?: unknown;
    hover?: unknown;
    keyboard?: unknown;
    click?: unknown;
    wheel?: unknown;
    resize?: unknown;
    drag?: unknown;
    draggable?: unknown;
    htmlDrag?: unknown;
    htmlDraggable?: unknown;
    button?: unknown;
};
export declare const SymHtmlSensors: unique symbol;
export declare const SymDataForSensor: unique symbol;
export declare const SymResizeObserver: unique symbol;
export declare const EmptyDataArray: any[];
export declare function findTargetElementData(targetPath: any[], underPointer: any[], sym: symbol, anyOfPayloadKeys: Array<keyof DataForSensor>, ignoreWindow?: boolean): {
    data?: DataForSensor;
    window: unknown;
};
export declare function grabElementDataList(targetPath: any[], sym: symbol, payloadKey: keyof DataForSensor, existing: Array<unknown>, ignoreWindow?: boolean, predicate?: (element: any) => boolean): {
    dataList: Array<unknown>;
    window: unknown;
    activeData: unknown;
};
