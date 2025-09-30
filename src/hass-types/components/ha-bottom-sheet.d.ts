import { LitElement, type PropertyValues } from "lit";
import "@home-assistant/webawesome/dist/components/drawer/drawer";
export declare const BOTTOM_SHEET_ANIMATION_DURATION_MS = 300;
export declare class HaBottomSheet extends LitElement {
    open: boolean;
    private _drawerOpen;
    private _handleAfterHide;
    protected updated(changedProperties: PropertyValues): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-bottom-sheet": HaBottomSheet;
    }
}
