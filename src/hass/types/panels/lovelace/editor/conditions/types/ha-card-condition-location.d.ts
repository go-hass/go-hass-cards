import { LitElement } from "lit";
import "../../../../../components/ha-check-list-item";
import "../../../../../components/ha-switch";
import "../../../../../components/ha-list";
import type { HomeAssistant } from "../../../../../types";
import type { LocationCondition } from "../../../common/validate-condition";
import "../../../../../components/ha-form/ha-form";
export declare class HaCardConditionLocation extends LitElement {
    hass: HomeAssistant;
    condition: LocationCondition;
    disabled: boolean;
    static get defaultConfig(): LocationCondition;
    protected static validateUIConfig(condition: LocationCondition): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    private _computeHelperCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-condition-location": HaCardConditionLocation;
    }
}
