import { LitElement } from "lit";
import "../../../../../components/ha-textfield";
import "../../../../../components/ha-yaml-editor";
import "../../../../../components/user/ha-users-picker";
import type { EventTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaEventTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: EventTrigger;
    disabled: boolean;
    static get defaultConfig(): EventTrigger;
    protected render(): import("lit-html").TemplateResult<1>;
    private _wrapUsersInArray;
    private _valueChanged;
    private _dataChanged;
    private _usersChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-event": HaEventTrigger;
    }
}
