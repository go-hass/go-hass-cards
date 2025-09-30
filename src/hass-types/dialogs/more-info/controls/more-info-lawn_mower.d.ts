import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-battery-icon";
import "../../../components/ha-icon-button";
import type { LawnMowerEntity } from "../../../data/lawn_mower";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoLawnMower extends LitElement {
    hass: HomeAssistant;
    stateObj?: LawnMowerEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _deviceEntities;
    private _renderBattery;
    private _callService;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-lawn_mower": MoreInfoLawnMower;
    }
}
export {};
