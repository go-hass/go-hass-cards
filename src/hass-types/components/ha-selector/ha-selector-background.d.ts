import { LitElement } from "lit";
import type { BackgroundSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-picture-upload";
import "../ha-alert";
export declare class HaBackgroundSelector extends LitElement {
    hass: HomeAssistant;
    value?: any;
    selector: BackgroundSelector;
    disabled: boolean;
    required: boolean;
    private yamlBackground;
    protected updated(changedProps: any): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _pictureChanged;
    private _clearValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-background": HaBackgroundSelector;
    }
}
