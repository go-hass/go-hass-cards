import { HaMdListItem } from "./ha-md-list-item";
export declare class HaComboBoxItem extends HaMdListItem {
    borderTop: boolean;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-combo-box-item": HaComboBoxItem;
    }
}
