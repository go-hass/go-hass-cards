import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/state-badge";
import "../../../components/ha-card";
import "../../../components/ha-icon";
import "../../../components/ha-relative-time";
import type { HomeAssistant } from "../../../types";
import "../components/hui-timestamp-display";
import "../components/hui-warning-element";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { GlanceCardConfig } from "./types";
export declare class HuiGlanceCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): GlanceCardConfig;
    hass?: HomeAssistant;
    private _config?;
    private _configEntities?;
    getCardSize(): number;
    setConfig(config: GlanceCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): TemplateResult<1> | typeof nothing;
    protected updated(changedProps: PropertyValues): void;
    static styles: import("lit").CSSResult;
    private _renderEntity;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-glance-card": HuiGlanceCard;
    }
}
