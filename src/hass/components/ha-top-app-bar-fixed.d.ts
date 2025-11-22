import { TopAppBarFixedBase } from "@material/mwc-top-app-bar-fixed/mwc-top-app-bar-fixed-base";
export declare class HaTopAppBarFixed extends TopAppBarFixedBase {
    narrow: boolean;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-top-app-bar-fixed": HaTopAppBarFixed;
    }
}
