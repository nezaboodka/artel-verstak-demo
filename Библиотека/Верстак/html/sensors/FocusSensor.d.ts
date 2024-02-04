import { ToggleRef } from "reactronic";
import { HtmlElementSensor } from "./HtmlElementSensor.js";
import { WindowSensor } from "./WindowSensor.js";
export type FocusModel = {
    isEditMode: boolean;
    onFocusIn?: (focus: FocusSensor) => void;
    onFocusOut?: (focus: FocusSensor) => void;
};
export type ContextModel = {
    contextToggle?: ToggleRef;
    onContextIn?: (focus: FocusSensor) => void;
    onContextOut?: (focus: FocusSensor) => void;
};
export declare class FocusSensor extends HtmlElementSensor {
    activeData: unknown;
    oldActiveData: unknown;
    contextElementDataList: unknown[];
    constructor(element: HTMLElement | SVGElement, windowSensor: WindowSensor);
    setActiveData(data: unknown, debugHint?: string): void;
    listen(enabled?: boolean): void;
    reset(): void;
    protected onFocusIn(e: FocusEvent): void;
    protected onFocusOut(e: FocusEvent): void;
    protected onMouseDown(e: MouseEvent): void;
    protected doFocusIn(e: FocusEvent): void;
    protected doFocusOut(e: FocusEvent): void;
    protected doMouseDown(e: MouseEvent): void;
    private trySetEditMode;
}
