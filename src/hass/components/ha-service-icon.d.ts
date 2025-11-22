import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-icon";
import "./ha-svg-icon";
export declare class HaServiceIcon extends LitElement {
    hass: HomeAssistant;
    service?: string;
    icon?: string;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _renderFallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-service-icon": HaServiceIcon;
    }
}
