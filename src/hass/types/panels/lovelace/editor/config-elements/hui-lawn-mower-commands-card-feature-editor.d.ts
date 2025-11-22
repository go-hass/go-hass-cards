import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { LawnMowerCommandsCardFeatureConfig, LovelaceCardFeatureContext } from "../../card-features/types";
import type { LovelaceCardFeatureEditor } from "../../types";
export declare class HuiLawnMowerCommandsCardFeatureEditor extends LitElement implements LovelaceCardFeatureEditor {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    setConfig(config: LawnMowerCommandsCardFeatureConfig): void;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-lawn-mower-commands-card-feature-editor": HuiLawnMowerCommandsCardFeatureEditor;
    }
}
