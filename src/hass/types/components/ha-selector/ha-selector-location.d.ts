import { LitElement } from "lit";
import type { LocationSelector, LocationSelectorValue } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../map/ha-locations-editor";
import "../ha-form/ha-form";
export declare class HaLocationSelector extends LitElement {
    hass: HomeAssistant;
    selector: LocationSelector;
    value?: LocationSelectorValue;
    label?: string;
    helper?: string;
    disabled: boolean;
    private _schema;
    protected willUpdate(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _location;
    private _locationChanged;
    private _radiusChanged;
    private _valueChanged;
    private _computeLabel;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-location": HaLocationSelector;
    }
}
