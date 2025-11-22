export declare const debounce: <T extends any[]>(func: (...args: T) => void, wait: number, immediate?: boolean) => {
    (...args: T): void;
    cancel(): void;
};
