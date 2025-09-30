import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-button";
import "./ha-icon-button";
import "./ha-svg-icon";
import "./ha-textfield";
export declare class HaCopyTextfield extends LitElement {
    hass: HomeAssistant;
    value: string;
    maskedValue?: string;
    label?: string;
    private _showMasked;
    render(): import("lit-html").TemplateResult<1>;
    private _focusInput;
    private _toggleMasked;
    private _copy;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-copy-textfield": HaCopyTextfield;
    }
}
