import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-card";
import type { DeviceRegistryEntry } from "../../../../data/device_registry";
import type { HomeAssistant } from "../../../../types";
export declare class HaDeviceCard extends LitElement {
    hass: HomeAssistant;
    device: DeviceRegistryEntry;
    narrow: boolean;
    protected render(): TemplateResult;
    protected _getAddresses(): [string, string][];
    private _computeDeviceNameDislay;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-info-card": HaDeviceCard;
    }
}
