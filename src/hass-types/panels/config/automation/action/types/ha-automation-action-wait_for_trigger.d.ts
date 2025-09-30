import { LitElement } from "lit";
import "../../../../../components/ha-duration-input";
import "../../../../../components/ha-formfield";
import "../../../../../components/ha-textfield";
import type { WaitForTriggerAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import "../../trigger/ha-automation-trigger";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaWaitForTriggerAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    action: WaitForTriggerAction;
    disabled: boolean;
    narrow: boolean;
    inSidebar: boolean;
    indent: boolean;
    static get defaultConfig(): WaitForTriggerAction;
    protected render(): import("lit-html").TemplateResult<1>;
    private _timeoutChanged;
    private _continueChanged;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-wait_for_trigger": HaWaitForTriggerAction;
    }
}
