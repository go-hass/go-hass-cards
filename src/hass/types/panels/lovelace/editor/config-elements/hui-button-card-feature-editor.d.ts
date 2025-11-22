import { LitElement, nothing } from "lit";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-service-control";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { ButtonCardFeatureConfig, LovelaceCardFeatureContext } from "../../card-features/types";
import type { LovelaceCardFeatureEditor } from "../../types";
export declare class HuiButtonCardFeatureEditor extends LitElement implements LovelaceCardFeatureEditor {
    hass: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    setConfig(config: ButtonCardFeatureConfig): void;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _computeLabel;
    private _scriptFieldVariablesChanged;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-button-card-feature-editor": HuiButtonCardFeatureEditor;
    }
}
