import { LitElement } from "lit";
/**
 * A bottom sheet component that slides up from the bottom of the screen.
 *
 * The bottom sheet provides a draggable interface that allows users to resize
 * the sheet by dragging the handle at the top. It supports both mouse and touch
 * interactions and automatically closes when dragged below a 20% of screen height.
 *
 * @fires bottom-sheet-closed - Fired when the bottom sheet is closed
 *
 * @cssprop --ha-bottom-sheet-border-width - Border width for the sheet
 * @cssprop --ha-bottom-sheet-border-style - Border style for the sheet
 * @cssprop --ha-bottom-sheet-border-color - Border color for the sheet
 */
export declare class HaResizableBottomSheet extends LitElement {
    private _dialog;
    private _dragging;
    private _dragStartY;
    private _initialSize;
    private _dialogMaxViewpointHeight;
    private _dialogMinViewpointHeight;
    private _dialogViewportHeight?;
    render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProperties: any): void;
    private _openSheet;
    closeSheet(): void;
    private _handleTransitionEnd;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleMouseDown;
    private _handleTouchStart;
    private _startDrag;
    private _handleMouseMove;
    private _handleTouchMove;
    private _updateSize;
    private _handleMouseUp;
    private _handleTouchEnd;
    private _endDrag;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-resizable-bottom-sheet": HaResizableBottomSheet;
    }
    interface HASSDomEvents {
        "bottom-sheet-closed": undefined;
    }
}
