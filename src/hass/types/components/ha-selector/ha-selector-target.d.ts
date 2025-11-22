import type { HassServiceTarget } from "home-assistant-js-websocket";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { TargetSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-target-picker";
export declare class HaTargetSelector extends LitElement {
    hass: HomeAssistant;
    selector: TargetSelector;
    value?: HassServiceTarget;
    label?: string;
    helper?: string;
    disabled: boolean;
    private _entitySources?;
    private _createDomains;
    private _deviceIntegrationLookup;
    private _hasIntegration;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _filterEntities;
    private _filterDevices;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-target": HaTargetSelector;
    }
}
