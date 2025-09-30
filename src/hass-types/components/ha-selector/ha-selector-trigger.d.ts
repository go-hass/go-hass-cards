import { LitElement } from "lit";
import type { Trigger } from "../../data/automation";
import type { TriggerSelector } from "../../data/selector";
import "../../panels/config/automation/trigger/ha-automation-trigger";
import type { HomeAssistant } from "../../types";
export declare class HaTriggerSelector extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    selector: TriggerSelector;
    value?: Trigger;
    label?: string;
    disabled: boolean;
    private _triggers;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-trigger": HaTriggerSelector;
    }
}
