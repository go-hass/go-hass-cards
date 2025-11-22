import { LitElement } from "lit";
import "../../components/ha-language-picker";
import "../../components/ha-settings-row";
import type { HomeAssistant } from "../../types";
export declare class HaPickLanguageRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _languageSelectionChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-pick-language-row": HaPickLanguageRow;
    }
}
