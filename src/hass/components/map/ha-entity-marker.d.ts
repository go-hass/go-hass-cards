import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-state-icon";
declare class HaEntityMarker extends LitElement {
    hass: HomeAssistant;
    entityId?: string;
    entityName?: string;
    entityUnit?: string;
    entityPicture?: string;
    entityColor?: string;
    showIcon: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _badgeTap;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-marker": HaEntityMarker;
    }
}
export {};
