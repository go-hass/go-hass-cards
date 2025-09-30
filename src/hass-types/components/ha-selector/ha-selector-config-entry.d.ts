import { LitElement } from "lit";
import type { ConfigEntrySelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-config-entry-picker";
export declare class HaConfigEntrySelector extends LitElement {
    hass: HomeAssistant;
    selector: ConfigEntrySelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-config_entry": HaConfigEntrySelector;
    }
}
