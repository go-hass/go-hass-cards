import "../../../../../components/ha-form/ha-form";
import { LitElement } from "lit";
import type { GeoLocationTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export declare class HaGeolocationTrigger extends LitElement {
    hass: HomeAssistant;
    trigger: GeoLocationTrigger;
    disabled: boolean;
    private _schema;
    static get defaultConfig(): GeoLocationTrigger;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-geo_location": HaGeolocationTrigger;
    }
}
