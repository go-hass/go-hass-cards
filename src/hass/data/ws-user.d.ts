import type { Connection } from "home-assistant-js-websocket";
import type { CurrentUser } from "../types";
export declare const userCollection: (conn: Connection) => import("home-assistant-js-websocket").Collection<CurrentUser>;
export declare const subscribeUser: (conn: Connection, onChange: (user: CurrentUser) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
