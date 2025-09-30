import { LitElement, nothing, type PropertyValues, type TemplateResult } from "lit";
import "../../../components/ha-aspect-ratio";
import "../../../components/ha-card";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-domain-icon";
import "../../../components/ha-icon";
import "../../../components/ha-ripple";
import "../../../components/ha-svg-icon";
import "../../../components/tile/ha-tile-badge";
import "../../../components/tile/ha-tile-icon";
import "../../../components/tile/ha-tile-info";
import type { HomeAssistant } from "../../../types";
import "../card-features/hui-card-features";
import type { LovelaceCardFeatureContext } from "../card-features/types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { AreaCardConfig } from "./types";
export declare const DEFAULT_ASPECT_RATIO = "16:9";
export declare const DEVICE_CLASSES: {
    sensor: string[];
    binary_sensor: string[];
};
export declare const SUM_DEVICE_CLASSES: string[];
export interface AreaCardFeatureContext extends LovelaceCardFeatureContext {
    exclude_entities?: string[];
}
export declare class HuiAreaCard extends LitElement implements LovelaceCard {
    hass: HomeAssistant;
    layout?: string;
    private _config?;
    private _featureContext;
    private _ratio;
    static getConfigElement(): Promise<LovelaceCardEditor>;
    setConfig(config: AreaCardConfig): void;
    static getStubConfig(hass: HomeAssistant): Promise<AreaCardConfig>;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    private get _hasCardAction();
    private _handleAction;
    private _groupEntitiesByDeviceClass;
    private _groupedSensorEntityIds;
    private _groupedBinarySensorEntityIds;
    private _getCameraEntity;
    private _computeActiveAlertStates;
    private _renderAlertSensorBadge;
    private _renderAlertSensors;
    private _computeSensorsDisplay;
    private _computeSumState;
    private _computeMedianState;
    private _featurePosition;
    private _displayedFeatures;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-area-card": HuiAreaCard;
    }
}
