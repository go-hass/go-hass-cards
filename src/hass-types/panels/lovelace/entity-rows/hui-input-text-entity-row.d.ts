import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import type { EntityConfig, LovelaceRow } from "./types";
declare class HuiInputTextEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _selectedValueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-input-text-entity-row": HuiInputTextEntityRow;
    }
}
export {};
