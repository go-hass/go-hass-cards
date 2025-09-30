export declare class CacheManager<T> {
    constructor(expiration?: number);
    private _expiration?;
    private _cache;
    get(key: string): T | undefined;
    set(key: string, value: T): void;
    has(key: string): boolean;
}
