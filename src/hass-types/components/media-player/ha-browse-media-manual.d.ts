import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-button";
import "../ha-card";
import "../ha-form/ha-form";
import type { MediaPlayerItemId } from "./ha-media-player-browse";
export interface ManualMediaPickedEvent {
    item: MediaPlayerItemId;
}
declare class BrowseMediaManual extends LitElement {
    hass: HomeAssistant;
    item: MediaPlayerItemId;
    hideContentType: boolean;
    contentIdHelper?: string;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabel;
    private _computeHelper;
    private _mediaPicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-browse-media-manual": BrowseMediaManual;
    }
    interface HASSDomEvents {
        "manual-media-picked": ManualMediaPickedEvent;
    }
}
export {};
