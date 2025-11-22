import { LitElement } from "lit";
import "../../../../../components/ha-textfield";
import "../../../../../components/ha-formfield";
import "../../../../../components/ha-switch";
import type { StopAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaStopAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    action: StopAction;
    disabled: boolean;
    static get defaultConfig(): StopAction;
    protected render(): import("lit-html").TemplateResult<1>;
    private _stopChanged;
    private _responseChanged;
    private _errorChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-stop": HaStopAction;
    }
}
