import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-form/ha-form";
import "../../../components/ha-yaml-editor";
import type { Field } from "../../../data/script";
import type { HomeAssistant } from "../../../types";
export default class HaScriptFieldSelectorEditor extends LitElement {
    hass: HomeAssistant;
    field: Field;
    narrow: boolean;
    selected: boolean;
    disabled: boolean;
    indent: boolean;
    yamlMode: boolean;
    private _uiError?;
    private _yamlError?;
    private _formElement?;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _onYamlChange;
    private _computeLabelCallback;
    private _computeError;
    private _getSelectorElements;
    expandAll(): void;
    collapseAll(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-script-field-selector-editor": HaScriptFieldSelectorEditor;
    }
}
