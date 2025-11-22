import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-entity-toggle";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import type { EntityConfig, LovelaceRow } from "./types";
declare class HuiGroupEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    private _computeCanToggle;
    setConfig(config: EntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-group-entity-row": HuiGroupEntityRow;
    }
}
export {};
