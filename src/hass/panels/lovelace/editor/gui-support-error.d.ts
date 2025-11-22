export declare class GUISupportError extends Error {
    warnings?: string[];
    errors?: string[];
    constructor(message: string, warnings?: string[], errors?: string[]);
}
