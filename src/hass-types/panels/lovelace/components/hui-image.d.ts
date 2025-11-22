import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-camera-stream";
import "../../../components/ha-spinner";
import type { HomeAssistant } from "../../../types";
export type StateSpecificConfig = Record<string, string>;
export declare class HuiImage extends LitElement {
    hass?: HomeAssistant;
    entity?: string;
    image?: string;
    stateImage?: StateSpecificConfig;
    cameraImage?: string;
    cameraView?: "live" | "auto";
    aspectRatio?: string;
    filter?: string;
    stateFilter?: StateSpecificConfig;
    darkModeImage?: string;
    darkModeFilter?: string;
    fitMode?: "cover" | "contain" | "fill";
    private _imageVisible?;
    private _loadState?;
    private _cameraImageSrc?;
    private _loadedImageSrc?;
    private _resolvedImageSrc?;
    private _resolvedDarkModeImageSrc?;
    private _resolvedStateImages;
    private _lastImageHeight?;
    private _intersectionObserver?;
    private _cameraUpdater?;
    private _ratio;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected handleIntersectionCallback(entries: IntersectionObserverEntry[]): void;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected _shouldStartCameraUpdates(oldHass?: HomeAssistant): boolean;
    private _startIntersectionObserverOrUpdates;
    private _stopIntersectionObserver;
    private _startUpdateCameraInterval;
    private _stopUpdateCameraInterval;
    private _onImageError;
    private _onImageLoad;
    private _onVideoLoad;
    private _updateCameraImageSrcAtInterval;
    private _updateCameraImageSrc;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-image": HuiImage;
    }
}
