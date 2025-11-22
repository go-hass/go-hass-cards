import "../../../layouts/hass-error-screen";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../layouts/hass-loading-screen";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "../../../components/ha-alert";
import "./components/ha-energy-device-settings";
import "./components/ha-energy-grid-settings";
import "./components/ha-energy-solar-settings";
import "./components/ha-energy-battery-settings";
import "./components/ha-energy-gas-settings";
import "./components/ha-energy-water-settings";
declare class HaConfigEnergy extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    showAdvanced: boolean;
    route: Route;
    private _searchParms;
    private _info?;
    private _preferences?;
    private _validationResult?;
    private _error?;
    private _statsMetadata?;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _fetchConfig;
    private _prefsChanged;
    private _fetchMetaData;
    private _downloadDiagnostics;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-energy": HaConfigEnergy;
    }
}
export {};
