import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeatureConfig, LovelaceCardFeatureContext, LovelaceCardFeaturePosition } from "./types";
export declare class HuiCardFeature extends LitElement {
    hass: HomeAssistant;
    context: LovelaceCardFeatureContext;
    feature?: LovelaceCardFeatureConfig;
    color?: string;
    position?: LovelaceCardFeaturePosition;
    private _element?;
    private _getFeatureElement;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-feature": HuiCardFeature;
    }
}
