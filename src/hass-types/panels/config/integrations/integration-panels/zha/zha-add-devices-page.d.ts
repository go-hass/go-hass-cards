import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-textarea";
import "../../../../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
import "./zha-device-pairing-status-card";
declare class ZHAAddDevicesPage extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    route?: Route;
    private _error?;
    private _discoveredDevices;
    private _formattedEvents;
    private _active;
    private _showHelp;
    private _showLogs;
    private _ieeeAddress?;
    private _addDevicesTimeoutHandle;
    private _subscribed?;
    private _wakeLock?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _toggleLogs;
    private _handleMessage;
    private _unsubscribe;
    private _deactivate;
    private _subscribe;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-add-devices-page": ZHAAddDevicesPage;
    }
}
export {};
