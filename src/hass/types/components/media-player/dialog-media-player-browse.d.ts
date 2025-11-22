import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import type { MediaPlayerLayoutType } from "../../data/media-player";
import type { HomeAssistant } from "../../types";
import "../ha-dialog";
import "../ha-dialog-header";
import "../ha-list-item";
import "./ha-media-manage-button";
import "./ha-media-player-browse";
import type { MediaPlayerBrowseDialogParams } from "./show-media-browser-dialog";
declare class DialogMediaPlayerBrowse extends LitElement {
    hass: HomeAssistant;
    private _currentItem?;
    private _navigateIds?;
    private _params?;
    _preferredLayout: MediaPlayerLayoutType;
    private _browser;
    showDialog(params: MediaPlayerBrowseDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _dialogOpened;
    private _handleMenuAction;
    private _goBack;
    private _mediaBrowsed;
    private _mediaPicked;
    private get _action();
    private _refreshMedia;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-media-player-browse": DialogMediaPlayerBrowse;
    }
}
export {};
