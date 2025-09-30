import type { Auth } from "home-assistant-js-websocket";
export declare const handleFetchPromise: <T>(fetchPromise: Promise<Response>) => Promise<T>;
export default function hassCallApi<T>(auth: Auth, method: string, path: string, parameters?: Record<string, unknown>, headers?: Record<string, string>): Promise<T>;
export declare function hassCallApiRaw(auth: Auth, method: string, path: string, parameters?: Record<string, unknown>, headers?: Record<string, string>, signal?: AbortSignal): Promise<Response>;
