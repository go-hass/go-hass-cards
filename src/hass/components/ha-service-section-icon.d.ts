import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-icon";
import "./ha-svg-icon";
export declare class HaServiceSectionIcon extends LitElement {
    hass: HomeAssistant;
    service?: string;
    section?: string;
    icon?: string;
    protected render(): symbol | import("lit-html").TemplateResult<1>;
    private _renderFallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-service-section-icon": HaServiceSectionIcon;
    }
}
