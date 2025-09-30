import { LitElement } from "lit";
import type { ImageSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-icon-button";
import "../ha-textarea";
import "../ha-textfield";
import "../ha-picture-upload";
import "../ha-radio";
import "../ha-formfield";
export declare class HaImageSelector extends LitElement {
    hass: HomeAssistant;
    value?: any;
    name?: string;
    label?: string;
    placeholder?: string;
    helper?: string;
    selector: ImageSelector;
    disabled: boolean;
    required: boolean;
    private showUpload;
    protected firstUpdated(changedProps: any): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _radioGroupPicked;
    private _pictureChanged;
    private _handleChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-image": HaImageSelector;
    }
}
