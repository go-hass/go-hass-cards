import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-domain-icon";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { AreaCardFeatureContext } from "../cards/hui-area-card";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { AreaControl, AreaControlsCardFeatureConfig, LovelaceCardFeatureContext, LovelaceCardFeaturePosition } from "./types";
interface AreaControlsButton {
    filter: {
        domain: string;
        device_class?: string;
    };
}
export declare const AREA_CONTROLS_BUTTONS: Record<AreaControl, AreaControlsButton>;
export declare const supportsAreaControlsCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
export declare const getAreaControlEntities: (controls: AreaControl[], areaId: string, excludeEntities: string[] | undefined, hass: HomeAssistant) => Record<AreaControl, string[]>;
export declare const MAX_DEFAULT_AREA_CONTROLS = 4;
declare class HuiAreaControlsCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    context?: AreaCardFeatureContext;
    position?: LovelaceCardFeaturePosition;
    private _config?;
    private get _area();
    private get _controls();
    static getStubConfig(): AreaControlsCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: AreaControlsCardFeatureConfig): void;
    private _handleButtonTap;
    private _controlEntities;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-area-controls-card-feature": HuiAreaControlsCardFeature;
    }
}
export {};
