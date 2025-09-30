import { type CSSResultGroup, LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-switch";
import "../ha-svg-icon";
declare class HaMediaPlayerToggle extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    checked: boolean;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _formatSecondaryText;
    static get styles(): CSSResultGroup;
    private _handleChange;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-media-player-toggle": HaMediaPlayerToggle;
    }
}
export {};
