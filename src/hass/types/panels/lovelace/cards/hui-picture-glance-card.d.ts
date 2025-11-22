import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-state-icon";
import type { HomeAssistant } from "../../../types";
import "../components/hui-image";
import "../components/hui-warning-element";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { PictureGlanceCardConfig } from "./types";
declare class HuiPictureGlanceCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): PictureGlanceCardConfig;
    hass: HomeAssistant;
    layout?: string;
    private _config?;
    private _entitiesDialog?;
    private _entitiesToggle?;
    getCardSize(): number;
    setConfig(config: PictureGlanceCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult<1> | typeof nothing;
    private _renderEntity;
    private _handleAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-glance-card": HuiPictureGlanceCard;
    }
}
export {};
