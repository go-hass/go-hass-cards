export declare const throttle: <T extends any[]>(func: (...args: T) => void, wait: number, leading?: boolean, trailing?: boolean) => {
    (...args: T): void;
    cancel(): void;
};
