import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-state-icon";
export declare class StateBadge extends LitElement {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    overrideIcon?: string;
    overrideImage?: string;
    stateColor?: boolean;
    color?: string;
    icon: boolean;
    private _iconStyle;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private get _stateColor();
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    willUpdate(changedProps: PropertyValues<this>): void;
    protected getClass(): Map<string, boolean>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-badge": StateBadge;
    }
}
