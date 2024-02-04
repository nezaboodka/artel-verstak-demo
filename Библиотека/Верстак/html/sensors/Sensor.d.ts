import { ObservableObject } from "reactronic";
export declare class Sensor extends ObservableObject {
    revision: number;
    elementDataList: unknown[];
    get topElementData(): unknown;
}
