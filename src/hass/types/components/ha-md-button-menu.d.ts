import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import { FOCUS_TARGET } from "../dialogs/make-dialog-manager";
import "./ha-md-menu";
export declare class HaMdButtonMenu extends LitElement {
    protected readonly [FOCUS_TARGET]: any;
    disabled: boolean;
    positioning?: "fixed" | "absolute" | "popover";
    anchorCorner: "start-start" | "start-end" | "end-start" | "end-end";
    menuCorner: "start-start" | "start-end" | "end-start" | "end-end";
    hasOverflow: boolean;
    quick: boolean;
    private _menu;
    get items(): import("@material/web/menu/menu").MenuItem[];
    focus(): void;
    protected render(): TemplateResult;
    private _handleOpening;
    private _handleClosing;
    private _handleClick;
    private get _triggerButton();
    private _setTriggerAria;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-md-button-menu": HaMdButtonMenu;
    }
}
declare global {
    interface HASSDomEvents {
        opening: undefined;
        closing: undefined;
    }
}
