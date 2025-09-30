import type { Connection, UnsubscribeFunc } from "home-assistant-js-websocket";
export declare const subscribeOne: <T>(conn: Connection, subscribe: (conn2: Connection, onChange: (items: T) => void) => UnsubscribeFunc) => Promise<T>;
