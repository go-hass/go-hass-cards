import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { IframeCardConfig } from "./types";
export declare class HuiIframeCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): IframeCardConfig;
    layout?: string;
    hass?: HomeAssistant;
    protected _config?: IframeCardConfig;
    getCardSize(): number;
    setConfig(config: IframeCardConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    getGridOptions(): LovelaceGridOptions;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-iframe-card": HuiIframeCard;
    }
}
