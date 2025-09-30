import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-duration-input";
import type { DelayAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaDelayAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: DelayAction;
    private _timeData?;
    static get defaultConfig(): DelayAction;
    willUpdate(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-delay": HaDelayAction;
    }
}
