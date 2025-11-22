import type { AuthData } from "home-assistant-js-websocket";
declare global {
    interface Window {
        __tokenCache: {
            tokens?: AuthData | null;
            writeEnabled?: boolean;
        };
    }
}
export declare function askWrite(): boolean;
export declare function saveTokens(tokens: AuthData | null): void;
export declare function enableWrite(): void;
export declare function loadTokens(): AuthData;
