import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import "../hui-sub-element-editor";
import type { HomeAssistant } from "../../../../types";
import type { PictureGlanceCardConfig } from "../../cards/types";
import "../../components/hui-entity-editor";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiPictureGlanceCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _subElementEditorConfig?;
    private _configEntities?;
    private _schema;
    private _subSchema;
    setConfig(config: PictureGlanceCardConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _processData;
    private _goBack;
    private _editDetailElement;
    private _handleSubEntityChanged;
    private _valueChanged;
    private _changed;
    private _computeLabelCallback;
    private _computeHelperCallback;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-glance-card-editor": HuiPictureGlanceCardEditor;
    }
}
