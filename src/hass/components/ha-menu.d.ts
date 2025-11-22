import { MenuBase } from "@material/mwc-menu/mwc-menu-base";
import "./ha-list";
export declare class HaMenu extends MenuBase {
    protected get listElement(): import("@material/mwc-list").List;
    protected renderList(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-menu": HaMenu;
    }
}
