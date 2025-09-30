import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-card";
import "../../components/ha-button";
import type { HomeAssistant, MFAModule } from "../../types";
declare class HaMfaModulesCard extends LitElement {
    hass: HomeAssistant;
    mfaModules: MFAModule[];
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
    private _enable;
    private _disable;
    private _refreshCurrentUser;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-mfa-modules-card": HaMfaModulesCard;
    }
}
export {};
