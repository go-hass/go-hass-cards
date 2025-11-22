import type { Auth, Connection } from "home-assistant-js-websocket";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
export declare class HassBaseEl extends LitElement {
    hass?: HomeAssistant;
    protected _pendingHass: Partial<HomeAssistant>;
    private __provideHass;
    provideHass(el: any): void;
    protected initializeHass(_auth: Auth, _conn: Connection): void;
    protected hassConnected(): void;
    protected hassReconnected(): void;
    protected hassDisconnected(): void;
    protected panelUrlChanged(_newPanelUrl: any): void;
    protected checkDataBaseMigration(): void;
    protected hassChanged(hass: any, _oldHass: any): void;
    protected _updateHass(obj: Partial<HomeAssistant>): void;
}
