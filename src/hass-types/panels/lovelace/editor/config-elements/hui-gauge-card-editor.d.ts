import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { GaugeCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiGaugeCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: GaugeCardConfig): void;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-gauge-card-editor": HuiGaugeCardEditor;
    }
}
