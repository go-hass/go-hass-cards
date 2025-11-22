import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-slider";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import type { EntityConfig, LovelaceRow } from "./types";
declare class HuiNumberEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    private _loaded?;
    private _updated?;
    private _resizeObserver?;
    setConfig(config: EntityConfig): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
    private _initialLoad;
    private _measureCard;
    private _attachObserver;
    private _selectedValueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-number-entity-row": HuiNumberEntityRow;
    }
}
export {};
