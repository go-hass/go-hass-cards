import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-service-control";
import type { ServiceAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaServiceAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    action: ServiceAction;
    disabled: boolean;
    narrow: boolean;
    private _action?;
    private _responseChecked;
    static get defaultConfig(): ServiceAction;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _actionChanged;
    private _responseVariableChanged;
    private _responseCheckboxChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-service": HaServiceAction;
    }
}
