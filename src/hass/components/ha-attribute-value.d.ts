import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
declare class HaAttributeValue extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    attribute: string;
    hideUnit: boolean;
    protected render(): string | import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-attribute-value": HaAttributeValue;
    }
}
export {};
