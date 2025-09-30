import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-svg-icon";
import type { Fields } from "../../../data/script";
import type { HomeAssistant } from "../../../types";
import "./ha-script-field-row";
export default class HaScriptFields extends LitElement {
    hass: HomeAssistant;
    disabled: boolean;
    fields: Fields;
    highlightedFields?: Fields;
    narrow: boolean;
    private _fieldRowElements?;
    private _focusLastActionOnChange;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    focusLastField(): void;
    private _addField;
    private _fieldChanged;
    private _getUniqueKey;
    expandAll(): void;
    collapseAll(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-script-fields": HaScriptFields;
    }
}
