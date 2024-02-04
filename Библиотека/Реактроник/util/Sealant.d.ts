export type Sealable<T> = {
    toMutable(): T;
    [Sealant.SealedType]: object;
};
export type Sealed<T> = {
    [Sealant.CreateCopy]?: () => T;
};
export declare abstract class Sealant {
    static readonly SealedType: unique symbol;
    static readonly CreateCopy: unique symbol;
    static seal<T extends Sealable<T>>(collection: T, sealedType: object, typeName: string, member: any): T;
    static toMutable<T extends Sealable<T>>(collection: T): T;
    static error(collection: Sealed<any>): Error;
}
