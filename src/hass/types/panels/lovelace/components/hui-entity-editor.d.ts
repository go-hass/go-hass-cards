import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-entity-picker";
import "../../../components/ha-icon-button";
import "../../../components/ha-sortable";
import type { HaEntityPickerEntityFilterFunc } from "../../../data/entity";
import type { HomeAssistant } from "../../../types";
import type { EntityConfig } from "../entity-rows/types";
export declare class HuiEntityEditor extends LitElement {
    hass: HomeAssistant;
    entities?: EntityConfig[];
    entityFilter?: HaEntityPickerEntityFilterFunc;
    label?: string;
    canEdit?: any;
    private _entityKeys;
    private _getKey;
    private _renderItem;
    private _editItem;
    private _deleteItem;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _addEntity;
    private _entityMoved;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-editor": HuiEntityEditor;
    }
}
