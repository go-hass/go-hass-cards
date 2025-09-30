import { ListItemEl } from "@material/web/list/internal/listitem/list-item";
export declare const haMdListStyles: import("lit").CSSResult[];
export declare class HaMdListItem extends ListItemEl {
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-md-list-item": HaMdListItem;
    }
}
