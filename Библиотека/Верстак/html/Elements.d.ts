import { RxNodeDecl, RxNodeDriver, RxNode, Delegate, MergedItem } from "../../Реактроник/api.js";
import { CursorCommandDriver, El, ElArea } from "./El.js";
import { HtmlDriver } from "./HtmlDriver.js";
export declare function Section<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>, preset?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>>;
export declare function Table<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M>>, preset?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>>;
export declare function row<T = void>(builder?: (element: void) => T, shiftCursorDown?: number): void;
export declare function Splitter<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M>>, preset?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>>;
export declare function rowBreak(shiftCursorDown?: number): void;
export declare function declareSplitter<T>(index: number, splitViewNode: RxNode<El<T>>): RxNode<El<HTMLElement>>;
export declare function cursor(areaParams: ElArea): void;
export declare function Note(content: string, formatted?: boolean, declaration?: RxNodeDecl<El<HTMLElement, void>>): RxNode<El<HTMLElement, void>>;
export declare function Group<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M>>, preset?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>>;
export declare function Handling<M = unknown>(onChange: Delegate<El<void, M>>): RxNode<El<void, M>>;
export declare function SyntheticElement<M = unknown>(declaration?: RxNodeDecl<El<void, M>>, preset?: RxNodeDecl<El<void, M>>): RxNode<El<void, M>>;
export declare class SectionDriver<T extends HTMLElement> extends HtmlDriver<T> {
    update(node: RxNode<El<T>>): void | Promise<void>;
    child(ownerNode: RxNode<El<T, any>>, childDriver: RxNodeDriver<any>, childDeclaration?: RxNodeDecl<any> | undefined, childPreset?: RxNodeDecl<any> | undefined): MergedItem<RxNode> | undefined;
}
export declare function isSplitViewPartition(childDriver: RxNodeDriver): boolean;
export declare const Drivers: {
    section: SectionDriver<HTMLElement>;
    table: HtmlDriver<HTMLElement, any>;
    note: HtmlDriver<HTMLElement, any>;
    group: HtmlDriver<HTMLElement, any>;
    partition: HtmlDriver<HTMLElement, any>;
    splitter: HtmlDriver<HTMLElement, any>;
    cursor: CursorCommandDriver;
    synthetic: RxNodeDriver<El<void, any>>;
};
