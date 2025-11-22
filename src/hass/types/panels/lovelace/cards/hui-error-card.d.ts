import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceGridOptions } from "../types";
import type { ErrorCardConfig } from "./types";
export declare class HuiErrorCard extends LitElement implements LovelaceCard {
    hass?: HomeAssistant;
    preview: boolean;
    severity: "warning" | "error";
    private _config?;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    setConfig(config: ErrorCardConfig): void;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-error-card": HuiErrorCard;
    }
}
