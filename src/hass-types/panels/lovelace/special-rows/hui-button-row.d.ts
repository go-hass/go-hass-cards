import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-state-icon";
import type { HomeAssistant } from "../../../types";
import type { ButtonRowConfig, LovelaceRow } from "../entity-rows/types";
export declare class HuiButtonRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: ButtonRowConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-button-row": HuiButtonRow;
    }
}
