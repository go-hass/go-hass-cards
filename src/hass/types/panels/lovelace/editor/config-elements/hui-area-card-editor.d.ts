import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { AreaCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiAreaCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _numericDeviceClasses?;
    private _featureContext;
    private _schema;
    private _binaryClassesForArea;
    private _sensorClassesForArea;
    private _buildBinaryOptions;
    private _buildSensorOptions;
    private _buildOptions;
    setConfig(config: AreaCardConfig): void;
    protected updated(): Promise<void>;
    private _featuresSchema;
    private _hasCompatibleFeatures;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _featuresChanged;
    private _editDetailElement;
    private _updateFeature;
    private _computeHelperCallback;
    private _computeLabelCallback;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-area-card-editor": HuiAreaCardEditor;
    }
}
