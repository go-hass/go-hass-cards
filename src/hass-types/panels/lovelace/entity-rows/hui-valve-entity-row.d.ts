import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-entity-toggle";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import type { EntityConfig, LovelaceRow } from "./types";
declare class HuiValveEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-valve-entity-row": HuiValveEntityRow;
    }
}
export {};
