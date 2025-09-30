import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button-menu";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import "../../../components/ha-svg-icon";
import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardPath } from "../editor/lovelace-path";
import type { Lovelace } from "../types";
export declare class HuiBadgeEditMode extends LitElement {
    hass: HomeAssistant;
    lovelace: Lovelace;
    path: LovelaceCardPath;
    hiddenOverlay: boolean;
    _menuOpened: boolean;
    _hover: boolean;
    _focused: boolean;
    protected _clipboard?: LovelaceCardConfig;
    private get _badges();
    private _touchStarted;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private _documentClicked;
    protected render(): TemplateResult;
    private _handleOpened;
    private _handleClosed;
    private _handleOverlayClick;
    private _handleAction;
    private _cutBadge;
    private _copyBadge;
    private _duplicateBadge;
    private _editBadge;
    private _deleteBadge;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-badge-edit-mode": HuiBadgeEditMode;
    }
}
