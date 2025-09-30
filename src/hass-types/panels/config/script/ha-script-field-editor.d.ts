import { LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-form/ha-form";
import "../../../components/ha-yaml-editor";
import type { Field } from "../../../data/script";
import type { HomeAssistant } from "../../../types";
export default class HaScriptFieldEditor extends LitElement {
    hass: HomeAssistant;
    key: string;
    excludeKeys: string[];
    field: Field;
    disabled: boolean;
    yamlMode: boolean;
    private _uiError?;
    private _yamlError?;
    private _errorKey?;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _maybeSetKey;
    private _valueChanged;
    private _onYamlChange;
    private _computeLabelCallback;
    private _computeError;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-script-field-editor": HaScriptFieldEditor;
    }
}
