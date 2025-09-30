import { LitElement, nothing } from "lit";
import "../../../components/ha-badge";
import "../../../components/ha-ripple";
import "../../../components/ha-state-icon";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceBadge, LovelaceBadgeEditor } from "../types";
import type { EntityBadgeConfig } from "./types";
export declare const DISPLAY_TYPES: readonly ["minimal", "standard", "complete"];
export type DisplayType = (typeof DISPLAY_TYPES)[number];
export declare const DEFAULT_DISPLAY_TYPE: DisplayType;
export declare const DEFAULT_CONFIG: EntityBadgeConfig;
export declare const migrateLegacyEntityBadgeConfig: (config: EntityBadgeConfig) => EntityBadgeConfig;
export declare class HuiEntityBadge extends LitElement implements LovelaceBadge {
    static getConfigElement(): Promise<LovelaceBadgeEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): EntityBadgeConfig;
    hass?: HomeAssistant;
    protected _config?: EntityBadgeConfig;
    setConfig(config: EntityBadgeConfig): void;
    get hasAction(): boolean;
    private _computeStateColor;
    private _getImageUrl;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-badge": HuiEntityBadge;
    }
}
