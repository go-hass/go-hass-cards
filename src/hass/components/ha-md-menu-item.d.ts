import { MenuItemEl } from "@material/web/menu/internal/menuitem/menu-item";
export declare class HaMdMenuItem extends MenuItemEl {
    clickAction?: (item?: HTMLElement) => void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-md-menu-item": HaMdMenuItem;
    }
}
