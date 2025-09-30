import { LitElement, nothing } from "lit";
import type { LocalizeFunc } from "../../common/translations/localize";
import "../../components/ha-list";
import "../../components/ha-list-item";
declare class DialogCommunity extends LitElement {
    localize?: LocalizeFunc;
    showDialog(params: any): Promise<void>;
    closeDialog(): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "community-dialog": DialogCommunity;
    }
}
export {};
