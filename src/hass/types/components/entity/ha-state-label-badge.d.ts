import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-label-badge";
import "../ha-state-icon";
export declare class HaStateLabelBadge extends LitElement {
    hass?: HomeAssistant;
    state?: HassEntity;
    name?: string;
    icon?: string;
    image?: string;
    showName: boolean;
    private _timerTimeRemaining?;
    private _connected?;
    private _updateRemaining?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    protected updated(changedProperties: PropertyValues): void;
    private _computeValue;
    private _computeShowIcon;
    private _computeLabel;
    private _clearInterval;
    private _startInterval;
    private _calculateTimerRemaining;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-label-badge": HaStateLabelBadge;
    }
}
