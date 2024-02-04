import { BasePointerSensor } from "./BasePointerSensor.js";
export type IHoverable = {
    isHovered: boolean;
    onHoverStart?: (hover: HoverSensor) => void;
    onHoverEnd?: (hover: HoverSensor) => void;
};
export declare class HoverSensor extends BasePointerSensor {
    isHovered: boolean;
    target: unknown;
    constructor(element: HTMLElement | SVGElement);
    listen(enabled?: boolean): void;
    protected onPointerEnter(e: PointerEvent): void;
    protected onPointerOver(e: PointerEvent): void;
    protected onPointerMove(e: PointerEvent): void;
    protected onPointerLeave(e: PointerEvent): void;
    protected doPointerEnter(e: PointerEvent): void;
    protected doPointerOver(e: PointerEvent): void;
    protected doPointerMove(e: PointerEvent): void;
    protected doPointerLeave(e: PointerEvent): void;
    protected reset(): void;
}
