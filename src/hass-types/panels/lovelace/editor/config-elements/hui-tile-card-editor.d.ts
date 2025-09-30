import { LitElement, nothing } from "lit";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { TileCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare const fieldOrder: string[];
export declare class HuiTileCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: TileCardConfig): void;
    private _featureContext;
    private _schema;
    private _featuresSchema;
    private _hasCompatibleFeatures;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _featuresChanged;
    private _editDetailElement;
    private _updateFeature;
    private _computeLabelCallback;
    private _computeHelperCallback;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-tile-card-editor": HuiTileCardEditor;
    }
}
