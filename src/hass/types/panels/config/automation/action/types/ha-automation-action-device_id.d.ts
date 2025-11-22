import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/device/ha-device-action-picker";
import "../../../../../components/device/ha-device-picker";
import "../../../../../components/ha-form/ha-form";
import type { DeviceAction } from "../../../../../data/device_automation";
import type { EntityRegistryEntry } from "../../../../../data/entity_registry";
import type { HomeAssistant } from "../../../../../types";
export declare class HaDeviceAction extends LitElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: DeviceAction;
    private _deviceId?;
    private _capabilities?;
    _entityReg: EntityRegistryEntry[];
    private _origAction?;
    static get defaultConfig(): DeviceAction;
    private _extraFieldsData;
    shouldUpdate(changedProperties: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(): void;
    protected updated(changedProps: any): void;
    private _getCapabilities;
    private _devicePicked;
    private _deviceActionPicked;
    private _extraFieldsChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-device_id": HaDeviceAction;
    }
}
