import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-icon-button";
import "../../../components/ha-slider";
import type { HomeAssistant } from "../../../types";
import "../components/hui-generic-entity-row";
import type { EntityConfig, LovelaceRow } from "./types";
declare class HuiMediaPlayerEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    private _narrow?;
    private _veryNarrow?;
    private _resizeObserver?;
    setConfig(config: EntityConfig): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(): void;
    protected firstUpdated(): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _attachObserver;
    private _measureCard;
    private _computeControlButton;
    private _togglePower;
    private _playPauseStop;
    private _play;
    private _pause;
    private _stop;
    private _previousTrack;
    private _nextTrack;
    private _toggleMute;
    private _volumeDown;
    private _volumeUp;
    private _selectedValueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-media-player-entity-row": HuiMediaPlayerEntityRow;
    }
}
export {};
