import "@home-assistant/webawesome/dist/components/drawer/drawer";
import { LitElement, type PropertyValues } from "lit";
export declare const BOTTOM_SHEET_ANIMATION_DURATION_MS = 300;
export declare class HaBottomSheet extends LitElement {
    open: boolean;
    flexContent: boolean;
    private _drawerOpen;
    private _drawer;
    private _gestureRecognizer;
    private _isDragging;
    private _handleAfterHide;
    protected updated(changedProperties: PropertyValues): void;
    render(): import("lit-html").TemplateResult<1>;
    private _handleTouchStart;
    private _startResizing;
    private _handleTouchMove;
    private _animateSnapBack;
    private _handleTouchEnd;
    private _unregisterResizeHandlers;
    disconnectedCallback(): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-bottom-sheet": HaBottomSheet;
    }
}
