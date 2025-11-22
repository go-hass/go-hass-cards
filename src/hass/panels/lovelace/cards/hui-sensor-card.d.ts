import type { CSSResultGroup } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardEditor, LovelaceGridOptions } from "../types";
import { HuiEntityCard } from "./hui-entity-card";
import type { SensorCardConfig } from "./types";
export declare const DEFAULT_HOURS_TO_SHOW = 24;
declare class HuiSensorCard extends HuiEntityCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): SensorCardConfig;
    setConfig(config: SensorCardConfig): void;
    getGridOptions(): LovelaceGridOptions;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-sensor-card": HuiSensorCard;
    }
}
export {};
