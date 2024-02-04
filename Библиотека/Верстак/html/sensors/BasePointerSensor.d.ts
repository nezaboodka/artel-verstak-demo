import { FocusSensor } from "./FocusSensor.js";
import { HtmlElementSensor } from "./HtmlElementSensor.js";
import { KeyboardModifiers } from "./KeyboardSensor.js";
import { WindowSensor } from "./WindowSensor.js";
export declare enum PointerButton {
    none = 0,
    left = 1,
    right = 2,
    middle = 4
}
export declare class BasePointerSensor extends HtmlElementSensor {
    positionX: number;
    positionY: number;
    modifiers: KeyboardModifiers;
    constructor(element: HTMLElement | SVGElement, focusSensor?: FocusSensor, windowSensor?: WindowSensor);
}
export declare function extractPointerButton(e: MouseEvent): PointerButton;
export declare function isPointerButtonDown(button: PointerButton, buttonsMask: number): boolean;
