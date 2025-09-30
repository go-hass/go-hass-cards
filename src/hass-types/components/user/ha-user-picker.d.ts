import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { User } from "../../data/user";
import type { HomeAssistant } from "../../types";
import "../ha-combo-box-item";
import "../ha-generic-picker";
import "./ha-user-badge";
declare class HaUserPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    placeholder?: string;
    noUserLabel?: string;
    value: string;
    users?: User[];
    disabled: boolean;
    protected firstUpdated(changedProps: any): void;
    private _fetchUsers;
    private usersMap;
    private _valueRenderer;
    private _rowRenderer;
    private _getUsers;
    private _getItems;
    protected render(): TemplateResult;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-user-picker": HaUserPicker;
    }
}
export {};
