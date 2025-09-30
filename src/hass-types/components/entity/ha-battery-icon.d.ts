import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../ha-icon";
export declare class HaBatteryIcon extends LitElement {
    batteryStateObj?: HassEntity;
    batteryChargingStateObj?: HassEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-battery-icon": HaBatteryIcon;
    }
}
