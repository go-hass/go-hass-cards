import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-card";
import "../../../../../layouts/hass-error-screen";
import "../../../../../layouts/hass-loading-screen";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
import "../../../ha-config-section";
import "./capability-controls/zwave_js-capability-control-color-switch";
import "./capability-controls/zwave_js-capability-control-door-lock";
import "./capability-controls/zwave_js-capability-control-multilevel-switch";
import "./capability-controls/zwave_js-capability-control-thermostat-setback";
declare class ZWaveJSNodeInstaller extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    configEntryId?: string;
    deviceId: string;
    private _nodeMetadata?;
    private _capabilities?;
    private _error?;
    connectedCallback(): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _fetchData;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-node-installer": ZWaveJSNodeInstaller;
    }
}
export {};
