import { Snackbar } from "@material/mwc-snackbar/mwc-snackbar";
export declare class HaToast extends Snackbar {
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-toast": HaToast;
    }
}
