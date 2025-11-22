import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-date-input";
import "../../../components/ha-time-input";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import type { EntityConfig, LovelaceRow } from "./types";
declare class HuiInputDatetimeEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): TemplateResult | typeof nothing;
    private _stopEventPropagation;
    private _timeChanged;
    private _dateChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-datetime-entity-row": HuiInputDatetimeEntityRow;
    }
}
export {};
