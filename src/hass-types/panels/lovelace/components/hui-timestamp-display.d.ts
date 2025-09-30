import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { TimestampRenderingFormat } from "./types";
declare class HuiTimestampDisplay extends LitElement {
    hass?: HomeAssistant;
    ts?: Date;
    format?: TimestampRenderingFormat;
    capitalize: boolean;
    private _relative?;
    private _connected?;
    private _interval?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected updated(changedProperties: PropertyValues): void;
    private get _format();
    private _startInterval;
    private _clearInterval;
    private _updateRelative;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-timestamp-display": HuiTimestampDisplay;
    }
}
export {};
