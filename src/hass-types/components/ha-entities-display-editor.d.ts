import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-items-display-editor";
export interface EntitiesDisplayValue {
    hidden?: string[];
    order?: string[];
}
export declare class HaEntitiesDisplayEditor extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: EntitiesDisplayValue;
    entitiesIds: string[];
    helper?: string;
    expanded: boolean;
    disabled: boolean;
    required: boolean;
    protected render(): TemplateResult;
    private _itemDisplayChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entities-display-editor": HaEntitiesDisplayEditor;
    }
}
