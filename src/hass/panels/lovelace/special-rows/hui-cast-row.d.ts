import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-icon";
import type { HomeAssistant } from "../../../types";
import type { CastConfig, LovelaceRow } from "../entity-rows/types";
declare class HuiCastRow extends LitElement implements LovelaceRow {
    hass: HomeAssistant;
    private _config?;
    private _castManager?;
    private _noHTTPS;
    setConfig(config: CastConfig): void;
    protected shouldUpdate(changedProperties: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected firstUpdated(changedProps: any): void;
    protected updated(changedProps: any): void;
    private _sendLovelace;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cast-row": HuiCastRow;
    }
}
export {};
