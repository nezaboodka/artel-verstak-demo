import { RxNodeDecl, RxNode, Delegate } from "../../Реактроник/api.js";
import { El, ElArea } from "./El.js";
import { HtmlElementDriver } from "./HtmlDriver.js";
export declare function Section<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>, preset?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>>;
export declare function Table<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M>>, preset?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>>;
export declare function row<T = void>(builder?: (element: void) => T, shiftCursorDown?: number): void;
export declare function startNewRow(shiftCursorDown?: number): void;
export declare function cursor(areaParams: ElArea): void;
export declare function Note(content: string, declaration?: RxNodeDecl<El<HTMLElement, void>>): RxNode<El<HTMLElement, void>>;
export declare function HtmlNote(content: string, declaration?: RxNodeDecl<El<HTMLElement, void>>): RxNode<El<HTMLElement, void>>;
export declare function Group<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M>>, preset?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>>;
export declare function Handler<M = unknown>(update: Delegate<El<void, M>>): RxNode<El<void, M>>;
export declare function SyntheticElement<M = unknown>(declaration?: RxNodeDecl<El<void, M>>, preset?: RxNodeDecl<El<void, M>>): RxNode<El<void, M>>;
export declare class VerstakElementDriver<T extends HTMLElement> extends HtmlElementDriver<T> {
    update(node: RxNode<El<T>>): void | Promise<void>;
}
