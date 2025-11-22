import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import "./hui-card-feature";
import type { LovelaceCardFeatureConfig, LovelaceCardFeatureContext, LovelaceCardFeaturePosition } from "./types";
/**
 * Home Assistant tile icon component
 *
 * @element hui-card-features
 *
 * @summary
 * A card features component, used in cards in Home Assistant to display extra features in card.
 *
 * @cssprop --ha-card-features-border-radius - The border radius of the card features. defaults to `var(--ha-border-radius-lg)`.
 *
 */
export declare class HuiCardFeatures extends LitElement {
    hass: HomeAssistant;
    context: LovelaceCardFeatureContext;
    features?: LovelaceCardFeatureConfig[];
    color?: string;
    position?: LovelaceCardFeaturePosition;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-features": HuiCardFeatures;
    }
}
