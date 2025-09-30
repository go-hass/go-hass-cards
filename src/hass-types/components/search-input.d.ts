import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-icon-button";
import "./ha-svg-icon";
import "./ha-textfield";
import type { HomeAssistant } from "../types";
declare class SearchInput extends LitElement {
    hass: HomeAssistant;
    filter?: string;
    suffix: boolean;
    autofocus: boolean;
    label?: string;
    focus(): void;
    private _input;
    protected render(): TemplateResult;
    private _filterChanged;
    private _filterInputChanged;
    private _clearSearch;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "search-input": SearchInput;
    }
}
export {};
