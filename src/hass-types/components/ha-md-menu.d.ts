import { Menu } from "@material/web/menu/internal/menu";
import type { CloseMenuEvent } from "@material/web/menu/menu";
export declare class HaMdMenu extends Menu {
    connectedCallback(): void;
    private _handleCloseMenu;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-md-menu": HaMdMenu;
    }
    interface HTMLElementEventMap {
        "close-menu": CloseMenuEvent;
    }
}
