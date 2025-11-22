import { LitElement, nothing } from "lit";
import type { User } from "../../data/user";
import type { HomeAssistant } from "../../types";
import "../ha-icon-button";
import "./ha-user-picker";
declare class HaUsersPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: string[];
    pickedUserLabel?: string;
    pickUserLabel?: string;
    users?: User[];
    disabled: boolean;
    protected firstUpdated(changedProps: any): void;
    private _fetchUsers;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _notSelectedUsers;
    private _notSelectedUsersAndSelected;
    private get _currentUsers();
    private _updateUsers;
    private _userChanged;
    private _addUser;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-users-picker": HaUsersPicker;
    }
}
export {};
