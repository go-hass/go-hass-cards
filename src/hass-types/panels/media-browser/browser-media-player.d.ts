import type { MediaPlayerEntity, MediaPlayerItem } from "../../data/media-player";
import type { ResolvedMediaSource } from "../../data/media_source";
import type { HomeAssistant } from "../../types";
export declare const ERR_UNSUPPORTED_MEDIA = "Unsupported Media";
export declare class BrowserMediaPlayer {
    hass: HomeAssistant;
    item: MediaPlayerItem;
    resolved: ResolvedMediaSource;
    private onChange;
    private player;
    buffering: boolean;
    private _removed;
    constructor(hass: HomeAssistant, item: MediaPlayerItem, resolved: ResolvedMediaSource, volume: number, onChange: () => void);
    private _handleChange;
    pause(): void;
    play(): void;
    setVolume(volume: number): void;
    remove(): void;
    static idleStateObj(): MediaPlayerEntity;
    toStateObj(): MediaPlayerEntity;
}
