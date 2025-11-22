import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-code-editor";
import type { ZHADevice } from "../../../../../data/zha";
import type { HomeAssistant } from "../../../../../types";
declare class ZHADeviceZigbeeInfo extends LitElement {
    hass: HomeAssistant;
    device?: ZHADevice;
    private _signature;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-device-zigbee-info": ZHADeviceZigbeeInfo;
    }
}
export {};
