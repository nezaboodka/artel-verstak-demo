import { ToggleRef } from "../../Реактроник/api.js";
import { FocusModel } from "./sensors/FocusSensor.js";
import { ResizedElement } from "./sensors/ResizeSensor.js";
export declare function OnClick(target: HTMLElement, action: (() => void) | ToggleRef | undefined, key?: string): void;
export declare function OnResize(target: HTMLElement, action: ((element: ResizedElement) => void) | undefined, key?: string): void;
export declare function OnFocus(target: HTMLElement, model: FocusModel, switchEditMode?: ((model?: FocusModel) => void) | undefined, key?: string): void;
