import { LitElement } from "lit";
import type { PropertyValues } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceViewBackgroundConfig } from "../../../data/lovelace/config/view";
export declare class HUIViewBackground extends LitElement {
    hass: HomeAssistant;
    background?: string | LovelaceViewBackgroundConfig | undefined;
    resolvedImage?: string;
    protected render(): symbol;
    private _fetchMedia;
    private _applyTheme;
    private _isFixedBackground;
    private _computeBackgroundProperty;
    private _computeBackgroundOpacityProperty;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-background": HUIViewBackground;
    }
}
