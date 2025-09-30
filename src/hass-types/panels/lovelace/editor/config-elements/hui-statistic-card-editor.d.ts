import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { StatisticCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiStatisticCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _metadata?;
    setConfig(config: StatisticCardConfig): void;
    firstUpdated(): void;
    private _data;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _fetchMetadata;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-statistic-card-editor": HuiStatisticCardEditor;
    }
}
