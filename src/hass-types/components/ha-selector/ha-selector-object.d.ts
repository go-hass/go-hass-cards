import { LitElement, type PropertyValues } from "lit";
import type { ObjectSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-input-helper-text";
import "../ha-md-list";
import "../ha-md-list-item";
import "../ha-sortable";
import "../ha-yaml-editor";
export declare class HaObjectSelector extends LitElement {
    hass: HomeAssistant;
    selector: ObjectSelector;
    value?: any;
    label?: string;
    helper?: string;
    placeholder?: string;
    disabled: boolean;
    required: boolean;
    localizeValue?: (key: string) => string;
    private _yamlEditor?;
    private _valueChangedFromChild;
    private _computeLabel;
    private _computeHelper;
    private _renderItem;
    protected render(): import("lit-html").TemplateResult<1>;
    private _schema;
    private _itemMoved;
    private _addItem;
    private _editItem;
    private _deleteItem;
    protected updated(changedProps: PropertyValues): void;
    private _handleChange;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-object": HaObjectSelector;
    }
}
