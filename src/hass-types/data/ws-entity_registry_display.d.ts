import type { Connection } from "home-assistant-js-websocket";
import type { EntityRegistryDisplayEntryResponse } from "./entity_registry";
export declare const subscribeEntityRegistryDisplay: (conn: Connection, onChange: (entities: EntityRegistryDisplayEntryResponse) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
