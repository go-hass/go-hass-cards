import "@material/mwc-linear-progress/mwc-linear-progress";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-state-icon";
import type { HomeAssistant } from "../../../types";
import "../components/hui-marquee";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { MediaControlCardConfig } from "./types";
export declare class HuiMediaControlCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): MediaControlCardConfig;
    hass: HomeAssistant;
    private _config?;
    private _foregroundColor?;
    private _backgroundColor?;
    private _narrow;
    private _veryNarrow;
    private _cardHeight;
    private _progressBar?;
    private _marqueeActive;
    private _progressInterval?;
    private _resizeObserver?;
    getCardSize(): number;
    setConfig(config: MediaControlCardConfig): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected firstUpdated(): void;
    willUpdate(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private get _image();
    private get _showProgressBar();
    private _measureCard;
    private _attachObserver;
    private _handleMoreInfo;
    private _handleBrowseMedia;
    private _handleJoinMediaPlayers;
    private _handleClick;
    private _updateProgressBar;
    private get _stateObj();
    private _handleSeek;
    private _setColors;
    private _marqueeMouseOver;
    private _marqueeMouseLeave;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-control-card": HuiMediaControlCard;
    }
}
