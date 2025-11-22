import type { Connection } from "home-assistant-js-websocket";
import type { Panels } from "../types";
export declare const subscribePanels: (conn: Connection, onChange: (panels: Panels) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
