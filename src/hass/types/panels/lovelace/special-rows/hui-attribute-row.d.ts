import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attribute-value";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import "../components/hui-timestamp-display";
import type { AttributeRowConfig, LovelaceRow } from "../entity-rows/types";
declare class HuiAttributeRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: AttributeRowConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-attribute-row": HuiAttributeRow;
    }
}
export {};
