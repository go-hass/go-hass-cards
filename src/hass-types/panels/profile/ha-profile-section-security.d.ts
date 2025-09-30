import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../types";
import "./ha-change-password-card";
import "./ha-long-lived-access-tokens-card";
import "./ha-mfa-modules-card";
import "./ha-refresh-tokens-card";
declare class HaProfileSectionSecurity extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _refreshTokens?;
    route: Route;
    connectedCallback(): void;
    firstUpdated(): void;
    protected render(): TemplateResult;
    private _refreshRefreshTokens;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-profile-section-security": HaProfileSectionSecurity;
    }
}
export {};
