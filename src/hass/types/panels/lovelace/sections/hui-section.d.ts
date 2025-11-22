import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import "../../../components/ha-svg-icon";
import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { LovelaceSectionRawConfig } from "../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../types";
import "../cards/hui-card";
import type { Lovelace } from "../types";
declare global {
    interface HASSDomEvents {
        "section-visibility-changed": {
            value: boolean;
        };
    }
}
export declare class HuiSection extends ReactiveElement {
    hass: HomeAssistant;
    config: LovelaceSectionRawConfig;
    lovelace?: Lovelace;
    preview: boolean;
    importOnly: boolean;
    index: number;
    viewIndex: number;
    private _cards;
    private _layoutElementType?;
    private _layoutElement?;
    private _listeners;
    private _config;
    protected _clipboard?: LovelaceCardConfig;
    private _createCardElement;
    protected createRenderRoot(): this;
    willUpdate(changedProperties: PropertyValues<typeof this>): void;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected update(changedProperties: any): void;
    private _clearMediaQueries;
    private _listenMediaQueries;
    private _initializeConfig;
    private _updateElement;
    private _setElementVisibility;
    private _createLayoutElement;
    private _createCards;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-section": HuiSection;
    }
}
