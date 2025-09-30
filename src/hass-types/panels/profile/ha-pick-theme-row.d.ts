import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-formfield";
import "../../components/ha-list-item";
import "../../components/ha-radio";
import "../../components/ha-button";
import "../../components/ha-select";
import "../../components/ha-settings-row";
import "../../components/ha-textfield";
import type { HomeAssistant } from "../../types";
export declare class HaPickThemeRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    _themeNames: string[];
    protected render(): TemplateResult;
    willUpdate(changedProperties: PropertyValues): void;
    private _handleColorChange;
    private _resetColors;
    private _supportsModeSelection;
    private _handleDarkMode;
    private _handleThemeSelection;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-pick-theme-row": HaPickThemeRow;
    }
}
