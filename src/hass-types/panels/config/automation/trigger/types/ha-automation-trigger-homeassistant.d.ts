import "../../../../../components/ha-form/ha-form";
import { LitElement } from "lit";
import type { HassTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export declare class HaHassTrigger extends LitElement {
    hass: HomeAssistant;
    trigger: HassTrigger;
    disabled: boolean;
    private _schema;
    static get defaultConfig(): HassTrigger;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-homeassistant": HaHassTrigger;
    }
}
