import { PointerButton, BasePointerSensor } from "./BasePointerSensor.js";
import { FocusSensor } from "./FocusSensor.js";
import { WindowSensor } from "./WindowSensor.js";
export declare enum ButtonState {
    pressed = 0,
    selecting = 1,
    selected = 2,
    released = 3
}
export declare class ButtonSensor extends BasePointerSensor {
    state: ButtonState;
    pointerButton: PointerButton;
    originData: unknown;
    selectedData: unknown;
    selectedX: number;
    selectedY: number;
    selected: boolean;
    constructor(element: HTMLElement | SVGElement, focusSensor: FocusSensor, windowSensor: WindowSensor);
    listen(enabled?: boolean): void;
    protected onPointerDown(e: PointerEvent): void;
    protected onPointerMove(e: PointerEvent): void;
    protected onPointerUp(e: PointerEvent): void;
    protected onLostPointerCapture(e: PointerEvent): void;
    protected onKeyDown(e: KeyboardEvent): void;
    protected press(e: PointerEvent): void;
    protected selecting(e: PointerEvent): void;
    protected select(e: PointerEvent): void;
    protected release(): void;
    protected cancel(): void;
    protected reset(): void;
    protected updateSensorData(e: PointerEvent): void;
}
