import { CheckListItemBase } from "@material/mwc-list/mwc-check-list-item-base";
import "./ha-checkbox";
export declare class HaCheckListItem extends CheckListItemBase {
    checkboxDisabled: boolean;
    indeterminate: boolean;
    onChange(event: any): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-check-list-item": HaCheckListItem;
    }
}
