import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceRow, SectionConfig } from "../entity-rows/types";
declare class HuiSectionRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: SectionConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-section-row": HuiSectionRow;
    }
}
export {};
