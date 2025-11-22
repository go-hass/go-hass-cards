import type { Connection } from "home-assistant-js-websocket";
import type { FloorRegistryEntry } from "./floor_registry";
export declare const subscribeFloorRegistry: (conn: Connection, onChange: (floors: FloorRegistryEntry[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
