import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import { type AreaControlsCardFeatureConfig } from "../../card-features/types";
import type { AreaCardFeatureContext } from "../../cards/hui-area-card";
import type { LovelaceCardFeatureEditor } from "../../types";
export declare class HuiAreaControlsCardFeatureEditor extends LitElement implements LovelaceCardFeatureEditor {
    hass?: HomeAssistant;
    context?: AreaCardFeatureContext;
    private _config?;
    setConfig(config: AreaControlsCardFeatureConfig): void;
    private _schema;
    private _supportedControls;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-area-controls-card-feature-editor": HuiAreaControlsCardFeatureEditor;
    }
}
