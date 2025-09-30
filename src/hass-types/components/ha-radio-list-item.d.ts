import { RadioListItemBase } from "@material/mwc-list/mwc-radio-list-item-base";
export declare class HaRadioListItem extends RadioListItemBase {
    onChange(event: any): Promise<void>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-radio-list-item": HaRadioListItem;
    }
}
