import { LitElement, nothing } from "lit";
import "../../../components/ha-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceRow, WeblinkConfig } from "../entity-rows/types";
declare class HuiWeblinkRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: WeblinkConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
    protected _computeTargetValue(): string | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-weblink-row": HuiWeblinkRow;
    }
}
export {};
