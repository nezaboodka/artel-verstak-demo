export declare abstract class Meta {
    static readonly Handle: unique symbol;
    static readonly Revision: unique symbol;
    static readonly Controller: unique symbol;
    static readonly Initial: unique symbol;
    static readonly Reactive: unique symbol;
    static readonly Raw: unique symbol;
    static readonly Undefined: unique symbol;
    static get<T>(obj: any, sym: symbol): T;
    static set(obj: any, sym: symbol, value: any): any;
    static acquire(proto: any, sym: symbol): any;
    static getFrom<T = any>(proto: any, sym: symbol): T;
}
