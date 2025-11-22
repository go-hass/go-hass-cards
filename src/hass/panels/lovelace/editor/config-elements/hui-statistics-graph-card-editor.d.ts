import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-statistics-picker";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { StatisticsGraphCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiStatisticsGraphCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _configEntities?;
    private _metaDatas?;
    setConfig(config: StatisticsGraphCardConfig): void;
    private _getStatisticsMetaData;
    willUpdate(changedProps: PropertyValues): void;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _entitiesChanged;
    private _computeLabelCallback;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-statistics-graph-card-editor": HuiStatisticsGraphCardEditor;
    }
}
