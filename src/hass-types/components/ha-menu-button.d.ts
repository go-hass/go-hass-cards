import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-icon-button";
declare class HaMenuButton extends LitElement {
    hassio: boolean;
    narrow: boolean;
    hass: HomeAssistant;
    private _hasNotifications;
    private _show;
    private _alwaysVisible;
    private _attachNotifOnConnect;
    private _unsubNotifications?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected firstUpdated(changedProps: any): void;
    protected willUpdate(changedProps: any): void;
    private _subscribeNotifications;
    private _toggleMenu;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-menu-button": HaMenuButton;
    }
}
export {};
