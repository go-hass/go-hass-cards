import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-icon-next";
import "../../../../components/ha-list-item";
import type { HomeAssistant } from "../../../../types";
export declare class HaDeviceViaDevicesCard extends LitElement {
    hass: HomeAssistant;
    deviceId: string;
    _showAll: boolean;
    private _viaDevices;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _toggleShowAll;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-via-devices-card": HaDeviceViaDevicesCard;
    }
}
