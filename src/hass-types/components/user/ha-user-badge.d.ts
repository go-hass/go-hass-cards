import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { User } from "../../data/user";
import type { CurrentUser, HomeAssistant } from "../../types";
declare class UserBadge extends LitElement {
    hass: HomeAssistant;
    user?: User | CurrentUser;
    private _personPicture?;
    private _personEntityId?;
    willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _getPersonPicture;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-user-badge": UserBadge;
    }
}
export {};
