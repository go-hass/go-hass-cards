import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-svg-icon";
declare class HaTip extends LitElement {
    hass: HomeAssistant;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tip": HaTip;
    }
}
export {};
