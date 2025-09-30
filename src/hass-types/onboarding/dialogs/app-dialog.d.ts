import { LitElement, nothing } from "lit";
import type { LocalizeFunc } from "../../common/translations/localize";
declare class DialogApp extends LitElement {
    localize?: LocalizeFunc;
    showDialog(params: any): Promise<void>;
    closeDialog(): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "app-dialog": DialogApp;
    }
}
export {};
