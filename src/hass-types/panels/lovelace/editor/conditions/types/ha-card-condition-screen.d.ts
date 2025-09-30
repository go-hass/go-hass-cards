import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../../types";
import type { ScreenCondition } from "../../../common/validate-condition";
export declare class HaCardConditionScreen extends LitElement {
    hass: HomeAssistant;
    condition: ScreenCondition;
    disabled: boolean;
    static get defaultConfig(): ScreenCondition;
    protected static validateUIConfig(condition: ScreenCondition, hass: HomeAssistant): void;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-condition-screen": HaCardConditionScreen;
    }
}
