import { LitElement } from "lit";
import type { WaitAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import type { ActionElement } from "../ha-automation-action-row";
import "../../../../../components/ha-form/ha-form";
export declare class HaWaitAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    action: WaitAction;
    disabled: boolean;
    static get defaultConfig(): WaitAction;
    protected render(): import("lit-html").TemplateResult<1>;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-wait_template": HaWaitAction;
    }
}
