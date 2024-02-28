import { ElCoords } from "./El.js";
export declare function objectHasMember<T>(obj: any, member: string): obj is T;
export declare function clamp(value: number, min: number, max: number): number;
export declare function emitLetters(n: number): string;
export declare function parseElCoords(text: string, result: ElCoords): ElCoords;
export declare function emitElCoords(value: ElCoords): string;
export declare function emitCellPosition(x: number, y: number): string;
export declare function equalElCoords(a: ElCoords, b: ElCoords): boolean;
