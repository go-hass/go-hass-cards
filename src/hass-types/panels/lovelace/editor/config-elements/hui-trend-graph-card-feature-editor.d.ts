import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCardFeatureContext, TrendGraphCardFeatureConfig } from "../../card-features/types";
import type { LovelaceCardFeatureEditor } from "../../types";
export declare class HuiTrendGraphCardFeatureEditor extends LitElement implements LovelaceCardFeatureEditor {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    setConfig(config: TrendGraphCardFeatureConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-trend-graph-card-feature-editor": HuiTrendGraphCardFeatureEditor;
    }
}
