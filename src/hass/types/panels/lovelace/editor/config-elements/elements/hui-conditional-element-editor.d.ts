import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../../types";
import "../../../../../components/ha-form/ha-form";
import type { LovelacePictureElementEditor } from "../../../types";
import type { ConditionalElementConfig } from "../../../elements/types";
import "../../conditions/ha-card-conditions-editor";
import "../../hui-picture-elements-card-row-editor";
import "../../hui-sub-element-editor";
export declare class HuiConditionalElementEditor extends LitElement implements LovelacePictureElementEditor {
    hass?: HomeAssistant;
    private _config?;
    private _subElementEditorConfig?;
    setConfig(config: ConditionalElementConfig): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _formChanged;
    private _conditionChanged;
    private _elementsChanged;
    private _handleSubElementChanged;
    private _editDetailElement;
    private _goBack;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-conditional-element-editor": HuiConditionalElementEditor;
    }
}
