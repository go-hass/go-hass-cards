import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import "../components/hui-image";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { PictureEntityCardConfig } from "./types";
export declare const STUB_IMAGE = "https://demo.home-assistant.io/stub_config/bedroom.png";
declare class HuiPictureEntityCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): PictureEntityCardConfig;
    hass?: HomeAssistant;
    layout?: string;
    private _config?;
    getCardSize(): number;
    setConfig(config: PictureEntityCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-entity-card": HuiPictureEntityCard;
    }
}
export {};
