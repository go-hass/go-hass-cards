import { ListItemEl } from "@material/web/list/internal/listitem/list-item";
import { nothing, type TemplateResult } from "lit";
import "./ha-ripple";
export declare const haMdListStyles: import("lit").CSSResult[];
export declare class HaMdListItem extends ListItemEl {
    static styles: import("lit").CSSResult[];
    protected renderRipple(): TemplateResult | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-md-list-item": HaMdListItem;
    }
}
