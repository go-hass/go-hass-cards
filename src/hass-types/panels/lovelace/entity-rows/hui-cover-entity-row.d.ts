import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-cover-controls";
import "../../../components/ha-cover-tilt-controls";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import type { EntityConfig, LovelaceRow } from "./types";
declare class HuiCoverEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-entity-row": HuiCoverEntityRow;
    }
}
export {};
