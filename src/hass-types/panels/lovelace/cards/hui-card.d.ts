import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import "../../../components/ha-svg-icon";
import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { HomeAssistant } from "../../../types";
import type { LovelaceGridOptions } from "../types";
declare global {
    interface HASSDomEvents {
        "card-visibility-changed": {
            value: boolean;
        };
        "card-updated": undefined;
    }
}
export declare class HuiCard extends ReactiveElement {
    preview: boolean;
    config?: LovelaceCardConfig;
    hass?: HomeAssistant;
    layout?: string;
    private _elementConfig?;
    load(): void;
    private _element?;
    private _listeners;
    protected createRenderRoot(): this;
    disconnectedCallback(): void;
    connectedCallback(): void;
    getCardSize(): number | Promise<number>;
    getGridOptions(): LovelaceGridOptions;
    getElementGridOptions(): LovelaceGridOptions;
    getConfigGridOptions(): LovelaceGridOptions;
    private _updateElement;
    private _loadElement;
    protected willUpdate(changedProps: PropertyValues<typeof this>): void;
    protected update(changedProps: PropertyValues<typeof this>): void;
    private _clearMediaQueries;
    private _listenMediaQueries;
    private _updateVisibility;
    private _setElementVisibility;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card": HuiCard;
    }
}
