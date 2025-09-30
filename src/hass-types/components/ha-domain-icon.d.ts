import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-icon";
export declare class HaDomainIcon extends LitElement {
    hass: HomeAssistant;
    domain?: string;
    deviceClass?: string;
    state?: string;
    icon?: string;
    brandFallback?: boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _renderFallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-domain-icon": HaDomainIcon;
    }
}
