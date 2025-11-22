import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-md-button-menu";
import "./ha-icon-button";
import "./ha-svg-icon";
import "./ha-tooltip";
import "./ha-md-menu-item";
import "./ha-md-divider";
export interface IconOverflowMenuItem {
    [key: string]: any;
    path: string;
    label: string;
    narrowOnly?: boolean;
    disabled?: boolean;
    tooltip?: string;
    action: () => any;
    warning?: boolean;
    divider?: boolean;
}
export declare class HaIconOverflowMenu extends LitElement {
    hass: HomeAssistant;
    items: IconOverflowMenuItem[];
    narrow: boolean;
    protected render(): TemplateResult | typeof nothing;
    protected _handleIconOverflowMenuOpened(e: any): void;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-overflow-menu": HaIconOverflowMenu;
    }
}
