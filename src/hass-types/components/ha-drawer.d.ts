import { DrawerBase } from "@material/mwc-drawer/mwc-drawer-base";
import type { PropertyValues } from "lit";
export declare class HaDrawer extends DrawerBase {
    direction: "ltr" | "rtl";
    private _mc?;
    private _rtlStyle?;
    protected createAdapter(): {
        trapFocus: () => void;
        releaseFocus: () => void;
        addClass(className: string): void;
        removeClass(className: string): void;
        hasClass(className: string): boolean;
        elementHasClass(element: Element, className: string): boolean;
        saveFocus(): void;
        restoreFocus(): void;
        focusActiveNavigationItem(): void;
        notifyClose(): void;
        notifyOpen(): void;
    };
    protected updated(changedProps: PropertyValues): void;
    private _setupSwipe;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-drawer": HaDrawer;
    }
}
