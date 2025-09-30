import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-analytics";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-checkbox";
import "../../../components/ha-settings-row";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
declare class ConfigAnalytics extends LitElement {
    hass: HomeAssistant;
    private _analyticsDetails?;
    private _error?;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _load;
    private _save;
    private _preferencesChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-analytics": ConfigAnalytics;
    }
}
export {};
