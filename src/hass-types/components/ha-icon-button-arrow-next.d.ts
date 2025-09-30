import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-icon-button";
export declare class HaIconButtonArrowNext extends LitElement {
    hass?: HomeAssistant;
    disabled: boolean;
    label?: string;
    private _icon;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button-arrow-next": HaIconButtonArrowNext;
    }
}
