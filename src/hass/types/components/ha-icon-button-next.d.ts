import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-icon-button";
export declare class HaIconButtonNext extends LitElement {
    hass?: HomeAssistant;
    disabled: boolean;
    label?: string;
    private _icon;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button-next": HaIconButtonNext;
    }
}
