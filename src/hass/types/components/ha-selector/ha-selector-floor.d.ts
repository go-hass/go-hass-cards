import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { FloorSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-floor-picker";
import "../ha-floors-picker";
export declare class HaFloorSelector extends LitElement {
    hass: HomeAssistant;
    selector: FloorSelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _entitySources?;
    private _configEntries?;
    private _deviceIntegrationLookup;
    private _hasIntegration;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _filterEntities;
    private _filterDevices;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-floor": HaFloorSelector;
    }
}
