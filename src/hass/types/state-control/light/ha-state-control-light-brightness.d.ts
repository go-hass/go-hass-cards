import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-control-slider";
import type { LightEntity } from "../../data/light";
import type { HomeAssistant } from "../../types";
export declare class HaStateControlLightBrightness extends LitElement {
    hass: HomeAssistant;
    stateObj: LightEntity;
    value?: number;
    protected updated(changedProp: Map<string | number | symbol, unknown>): void;
    private _valueChanged;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-light-brightness": HaStateControlLightBrightness;
    }
}
