import { HtmlElementSensor } from "./HtmlElementSensor.js";
export declare enum KeyboardModifiers {
    none = 0,
    ctrl = 1,
    shift = 2,
    alt = 4,
    meta = 8,
    ctrlShift = 3,
    ctrlAlt = 5,
    ctrlMeta = 9,
    ctrlShiftAlt = 7,
    ctrlShiftAltMeta = 15,
    ctrlShiftMeta = 11,
    shiftAlt = 6,
    shiftMeta = 10,
    shiftAltMeta = 14,
    altMeta = 12
}
export declare class KeyboardSensor extends HtmlElementSensor {
    down: string;
    up: string;
    modifiers: KeyboardModifiers;
    constructor(element: HTMLElement | SVGElement);
    listen(enabled?: boolean): void;
    reset(): void;
    protected onKeyDown(e: KeyboardEvent): void;
    protected onKeyUp(e: KeyboardEvent): void;
    protected keyDown(e: KeyboardEvent): void;
    protected keyUp(e: KeyboardEvent): void;
    protected updateSensorData(e: KeyboardEvent): void;
    protected static getKeyAsModifierIfAny(key: string): KeyboardModifiers;
}
export declare function extractModifierKeys(e: MouseEvent | KeyboardEvent | WheelEvent): KeyboardModifiers;
