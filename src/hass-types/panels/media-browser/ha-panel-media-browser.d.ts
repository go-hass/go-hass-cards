import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-icon-button";
import "../../components/ha-icon-button-arrow-prev";
import "../../components/ha-list-item";
import "../../components/ha-menu-button";
import "../../components/ha-top-app-bar-fixed";
import "../../components/media-player/ha-media-manage-button";
import "../../components/media-player/ha-media-player-browse";
import type { MediaPlayerItem } from "../../data/media-player";
import type { HomeAssistant, Route } from "../../types";
import "./ha-bar-media-player";
declare class PanelMediaBrowser extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    _currentItem?: MediaPlayerItem;
    private _preferredLayout;
    private _navigateIds;
    private _entityId;
    private _browser;
    private _player;
    protected render(): TemplateResult;
    private _handleMenuAction;
    willUpdate(changedProps: PropertyValues): void;
    private _goBack;
    private _mediaBrowsed;
    private _mediaPicked;
    private _playerPicked;
    private _refreshMedia;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-media-browser": PanelMediaBrowser;
    }
}
export {};
