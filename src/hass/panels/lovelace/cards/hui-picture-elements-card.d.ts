import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { PictureElementsCardConfig } from "./types";
declare class HuiPictureElementsCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    hass?: HomeAssistant;
    preview: boolean;
    private _elements?;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): PictureElementsCardConfig;
    private _config?;
    getCardSize(): number;
    setConfig(config: PictureElementsCardConfig): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
    private _createElement;
    private _rebuildElement;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-elements-card": HuiPictureElementsCard;
    }
}
export {};
