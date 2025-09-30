import { LitElement, nothing } from "lit";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import "../../../components/ha-select";
import "../../../components/ha-slider";
import "../../../components/ha-button";
import "../../../components/ha-svg-icon";
import type { MediaPlayerEntity } from "../../../data/media-player";
import type { HomeAssistant } from "../../../types";
import "../../../components/ha-md-button-menu";
import "../../../components/chips/ha-assist-chip";
import "../../../components/ha-md-menu-item";
import "../../../components/ha-marquee-text";
declare class MoreInfoMediaPlayer extends LitElement {
    hass: HomeAssistant;
    stateObj?: MediaPlayerEntity;
    private _formatDuration;
    protected _renderVolumeControl(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected _renderSourceControl(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected _renderSoundMode(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected _renderGrouping(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected _renderEmptyCover(title: string, icon?: string): import("lit-html").TemplateResult<1>;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
    private _handleClick;
    private _toggleMute;
    private _selectedValueChanged;
    private _handleSourceClick;
    private _handleSoundModeClick;
    private _showBrowseMedia;
    private _showGroupMediaPlayers;
    private _handleMediaSeekChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-media_player": MoreInfoMediaPlayer;
    }
}
export {};
