import { LitElement } from "lit";
import "../../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../../types";
declare class ZWaveJSProvisioned extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    configEntryId: string;
    private _provisioningEntries;
    protected render(): import("lit-html").TemplateResult<1>;
    private _columns;
    protected firstUpdated(changedProps: any): void;
    private _fetchData;
    private _unprovision;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-provisioned": ZWaveJSProvisioned;
    }
}
export {};
