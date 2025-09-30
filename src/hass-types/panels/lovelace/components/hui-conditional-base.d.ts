import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import type { HomeAssistant } from "../../../types";
import type { HuiCard } from "../cards/hui-card";
import type { ConditionalCardConfig } from "../cards/types";
import type { ConditionalRowConfig, LovelaceRow } from "../entity-rows/types";
declare global {
    interface HASSDomEvents {
        "visibility-changed": {
            value: boolean;
        };
    }
}
export declare class HuiConditionalBase extends ReactiveElement {
    hass?: HomeAssistant;
    preview: boolean;
    protected _config?: ConditionalCardConfig | ConditionalRowConfig;
    protected _element?: HuiCard | LovelaceRow;
    private _listeners;
    private _mediaQueries;
    protected createRenderRoot(): this;
    protected validateConfig(config: ConditionalCardConfig | ConditionalRowConfig): void;
    disconnectedCallback(): void;
    connectedCallback(): void;
    private _clearMediaQueries;
    private _listenMediaQueries;
    protected update(changed: PropertyValues): void;
    private _updateVisibility;
    protected setVisibility(conditionMet: boolean): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-conditional-base": HuiConditionalBase;
    }
}
