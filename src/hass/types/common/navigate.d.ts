declare global {
    interface HASSDomEvents {
        "location-changed": NavigateOptions;
    }
}
export interface NavigateOptions {
    replace?: boolean;
    data?: any;
}
export declare const navigate: (path: string, options?: NavigateOptions, timestamp?: number) => Promise<boolean>;
/**
 * Navigate back in history, with fallback to a default path if no history exists.
 * This prevents a user from getting stuck when they navigate directly to a page with no history.
 */
export declare const goBack: (fallbackPath?: string) => void;
