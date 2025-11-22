import { ListItemBase } from "@material/mwc-list/mwc-list-item-base";
import type { CSSResultGroup } from "lit";
export declare class HaListItem extends ListItemBase {
    protected renderRipple(): "" | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-list-item": HaListItem;
    }
}
