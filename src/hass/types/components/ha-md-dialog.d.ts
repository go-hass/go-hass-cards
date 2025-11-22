import { Dialog } from "@material/web/dialog/internal/dialog";
import { type DialogAnimation } from "@material/web/dialog/internal/animations";
/**
 * Based on the home assistant design: https://design.home-assistant.io/#components/ha-dialogs
 *
 */
export declare class HaMdDialog extends Dialog {
    /**
     * When true the dialog will not close when the user presses the esc key or press out of the dialog.
     */
    disableCancelAction: boolean;
    private _polyfillDialogRegistered;
    constructor();
    private _handleOpen;
    private _loadPolyfillStylesheet;
    private _handleCancel;
    static styles: import("lit").CSSResult[];
}
export declare const getMobileOpenFromBottomAnimation: () => DialogAnimation;
export declare const getMobileCloseToBottomAnimation: () => DialogAnimation;
declare global {
    interface HTMLElementTagNameMap {
        "ha-md-dialog": HaMdDialog;
    }
}
