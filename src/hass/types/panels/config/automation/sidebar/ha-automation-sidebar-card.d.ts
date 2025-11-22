import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-md-button-menu";
import "../../../../components/ha-md-divider";
import "../../../../components/ha-md-menu-item";
import type { HomeAssistant } from "../../../../types";
import "../ha-automation-editor-warning";
export interface SidebarOverflowMenuEntry {
    clickAction: () => void;
    disabled?: boolean;
    label: string;
    icon?: string;
    danger?: boolean;
}
export type SidebarOverflowMenu = (SidebarOverflowMenuEntry | "separator")[];
export default class HaAutomationSidebarCard extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    yamlMode: boolean;
    warnings?: string[];
    narrow: boolean;
    private _contentScrolled;
    private _contentScrollable;
    private _contentElement;
    private _contentSize;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _onScroll;
    private _canScrollDown;
    private _closeSidebar;
    private _openOverflowMenu;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-sidebar-card": HaAutomationSidebarCard;
    }
}
