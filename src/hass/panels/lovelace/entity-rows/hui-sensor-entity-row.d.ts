import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { EntitiesCardEntityConfig } from "../cards/types";
import "../components/hui-generic-entity-row";
import "../components/hui-timestamp-display";
import type { TimestampRenderingFormat } from "../components/types";
import type { LovelaceRow } from "./types";
interface SensorEntityConfig extends EntitiesCardEntityConfig {
    format?: TimestampRenderingFormat;
}
declare class HuiSensorEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: SensorEntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-sensor-entity-row": HuiSensorEntityRow;
    }
}
export {};
