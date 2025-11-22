import { LitElement } from "lit";
import type { LocalizeFunc } from "../common/translations/localize";
import "../components/ha-icon-next";
import "../components/ha-list";
import "../components/ha-list-item";
import type { AuthProvider } from "../data/auth";
declare global {
    interface HTMLElementTagNameMap {
        "ha-pick-auth-provider": HaPickAuthProvider;
    }
    interface HASSDomEvents {
        "pick-auth-provider": AuthProvider;
    }
}
export declare class HaPickAuthProvider extends LitElement {
    authProviders: AuthProvider[];
    localize: LocalizeFunc;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handlePick;
    static styles: import("lit").CSSResult;
}
