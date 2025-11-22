import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-check-list-item";
import "./ha-expansion-panel";
import "./ha-icon";
import "./ha-icon-button";
import "./ha-list";
export declare class HaFilterStates extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: string[];
    states?: {
        value: any;
        label?: string;
        icon?: string;
    }[];
    narrow: boolean;
    expanded: boolean;
    private _shouldRender;
    private _list;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected willUpdate(changed: any): void;
    protected updated(changed: any): void;
    private _expandedWillChange;
    private _expandedChanged;
    private _statesSelected;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-states": HaFilterStates;
    }
}
