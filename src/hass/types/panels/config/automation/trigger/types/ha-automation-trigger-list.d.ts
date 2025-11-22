import { LitElement } from "lit";
import type { TriggerList } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import "../ha-automation-trigger";
import type { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaTriggerList extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: TriggerList;
    disabled: boolean;
    static get defaultConfig(): TriggerList;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-list": HaTriggerList;
    }
}
