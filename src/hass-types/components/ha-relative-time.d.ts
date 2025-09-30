import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import type { HomeAssistant } from "../types";
declare class HaRelativeTime extends ReactiveElement {
    hass: HomeAssistant;
    datetime?: string | Date;
    capitalize: boolean;
    private _interval?;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected createRenderRoot(): this;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected update(changedProps: PropertyValues): void;
    private _clearInterval;
    private _startInterval;
    private _updateRelative;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-relative-time": HaRelativeTime;
    }
}
export {};
