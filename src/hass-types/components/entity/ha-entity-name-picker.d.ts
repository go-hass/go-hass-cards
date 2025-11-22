import "@material/mwc-menu/mwc-menu-surface";
import { LitElement } from "lit";
import type { EntityNameItem } from "../../common/entity/compute_entity_name_display";
import type { HomeAssistant } from "../../types";
import "../chips/ha-assist-chip";
import "../chips/ha-chip-set";
import "../chips/ha-input-chip";
import "../ha-combo-box";
import "../ha-input-helper-text";
import "../ha-sortable";
export declare class HaEntityNamePicker extends LitElement {
    hass: HomeAssistant;
    entityId?: string;
    value?: string | EntityNameItem | EntityNameItem[];
    label?: string;
    helper?: string;
    required: boolean;
    disabled: boolean;
    private _container?;
    private _comboBox;
    private _opened;
    private _editIndex?;
    private _validTypes;
    private _getOptions;
    private _customNameOption;
    private _formatItem;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderHelper;
    private _onClosed;
    private _onOpened;
    private _addItem;
    private _editItem;
    private get _items();
    private _toItems;
    private _toValue;
    private _openedChanged;
    private _filterSelectedOptions;
    private _filterChanged;
    private _moveItem;
    private _removeItem;
    private _comboBoxValueChanged;
    private _setValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-name-picker": HaEntityNamePicker;
    }
}
