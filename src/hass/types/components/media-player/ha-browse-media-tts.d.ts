import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { MediaPlayerBrowseAction, MediaPlayerItem } from "../../data/media-player";
import type { HomeAssistant } from "../../types";
import "../ha-button";
import "../ha-card";
import "../ha-language-picker";
import "../ha-textarea";
import "../ha-tts-voice-picker";
export interface TtsMediaPickedEvent {
    item: MediaPlayerItem;
}
declare global {
    interface HASSDomEvents {
        "tts-picked": TtsMediaPickedEvent;
    }
}
declare class BrowseMediaTTS extends LitElement {
    hass: HomeAssistant;
    item: MediaPlayerItem;
    action: MediaPlayerBrowseAction;
    private _language?;
    private _voice?;
    private _provider?;
    private _message?;
    protected render(): import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProps: PropertyValues): void;
    private _languageChanged;
    private _voiceChanged;
    private _ttsClicked;
    private _copyVoiceId;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-browse-media-tts": BrowseMediaTTS;
    }
}
export {};
