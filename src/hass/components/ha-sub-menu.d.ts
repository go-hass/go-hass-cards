import { SubMenu } from "@material/web/menu/internal/submenu/sub-menu";
export declare class HaSubMenu extends SubMenu {
    show(): Promise<void>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-sub-menu": HaSubMenu;
    }
}
