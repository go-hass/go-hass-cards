import { LitElement, nothing } from "lit";
import type { MediaPlayerItem } from "../../data/media-player";
import type { HomeAssistant } from "../../types";
import "../ha-svg-icon";
import "../ha-button";
declare global {
    interface HASSDomEvents {
        "media-refresh": unknown;
    }
}
declare class MediaManageButton extends LitElement {
    hass: HomeAssistant;
    currentItem?: MediaPlayerItem;
    _uploading: number;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _manage;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-media-manage-button": MediaManageButton;
    }
}
export {};
