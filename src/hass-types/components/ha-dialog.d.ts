import { DialogBase } from "@material/mwc-dialog/mwc-dialog-base";
import type { TemplateResult } from "lit";
import { FOCUS_TARGET } from "../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../types";
import "./ha-icon-button";
export declare const createCloseHeading: (hass: HomeAssistant | undefined, title: string | TemplateResult) => TemplateResult<1>;
export declare class HaDialog extends DialogBase {
    protected readonly [FOCUS_TARGET]: any;
    scrollToPos(x: number, y: number): void;
    protected renderHeading(): TemplateResult<1>;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private _onScroll;
    private _updateScrolledAttribute;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog": HaDialog;
    }
}
