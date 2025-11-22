import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceHeadingBadgeConfig } from "./types";
declare global {
    interface HASSDomEvents {
        "heading-badge-visibility-changed": {
            value: boolean;
        };
        "heading-badge-updated": undefined;
    }
}
export declare class HuiHeadingBadge extends ReactiveElement {
    preview: boolean;
    config?: LovelaceHeadingBadgeConfig;
    hass?: HomeAssistant;
    private _elementConfig?;
    load(): void;
    private _element?;
    private _listeners;
    protected createRenderRoot(): this;
    disconnectedCallback(): void;
    connectedCallback(): void;
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
        "hui-heading-badge": HuiHeadingBadge;
    }
}
