import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-button";
import "../../components/ha-md-button-menu";
import "../../components/ha-md-menu-item";
import "../../components/ha-card";
import "../../components/ha-icon-button";
import "../../components/ha-label";
import "../../components/ha-list-item";
import "../../components/ha-settings-row";
import type { RefreshToken } from "../../data/refresh_token";
import type { HomeAssistant } from "../../types";
declare class HaRefreshTokens extends LitElement {
    hass: HomeAssistant;
    refreshTokens?: RefreshToken[];
    private _refreshTokens;
    private _formatTokenName;
    protected render(): TemplateResult;
    private _toggleTokenExpiration;
    private _deleteToken;
    private _deleteAllTokens;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-refresh-tokens-card": HaRefreshTokens;
    }
}
export {};
