import { RxNode, SimpleDelegate } from "../../Реактроник/api.js";
import { El, ElDriver } from "./El.js";
export declare class WebDriver<T extends Element, M = unknown> extends ElDriver<T, M> {
    setNativeElement(node: RxNode<El<T, M>>): void;
    initialize(node: RxNode<El<T, M>>): void;
    finalize(node: RxNode<El<T, M>>, isLeader: boolean): boolean;
    mount(node: RxNode<El<T, M>>): void;
    update(node: RxNode<El<T, M>>): void | Promise<void>;
    static findBrotherlyHost<T, R>(node: RxNode<El<T>>): RxNode<El<R>> | undefined;
    static findBrotherlyPrevSibling<T, R>(node: RxNode<El<T>>): RxNode<El<R>> | undefined;
    static get blinkingEffectMarker(): string | undefined;
    static set blinkingEffectMarker(value: string | undefined);
}
export declare class StaticDriver<T extends HTMLElement> extends WebDriver<T> {
    readonly native: T;
    constructor(native: T, name: string, isRow: boolean, predefine?: SimpleDelegate<El<T>>);
    setNativeElement(node: RxNode<El<T>>): void;
}
export declare class HtmlElementDriver<T extends HTMLElement, M = any> extends WebDriver<T, M> {
    setNativeElement(node: RxNode<El<T, M>>): void;
}
export declare class SvgElementDriver<T extends SVGElement, M = any> extends WebDriver<T, M> {
    setNativeElement(node: RxNode<El<T, M>>): void;
}
