import { LitElement, nothing } from "lit";
import type { MediaPlayerItem } from "../../data/media-player";
import type { HomeAssistant } from "../../types";
import "../ha-button";
import "../ha-svg-icon";
declare global {
    interface HASSDomEvents {
        uploading: unknown;
        "media-refresh": unknown;
    }
}
declare class MediaUploadButton extends LitElement {
    hass: HomeAssistant;
    currentItem?: MediaPlayerItem;
    _uploading: number;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _startUpload;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-media-upload-button": MediaUploadButton;
    }
}
export {};
