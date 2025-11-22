import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, type PropertyValues } from "lit";
import { type DeviceRegistryEntry } from "../../data/device_registry";
import type { HomeAssistant } from "../../types";
import "../ha-generic-picker";
export type HaDevicePickerDeviceFilterFunc = (device: DeviceRegistryEntry) => boolean;
export type HaDevicePickerEntityFilterFunc = (entity: HassEntity) => boolean;
export declare class HaDevicePicker extends LitElement {
    hass: HomeAssistant;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    label?: string;
    value?: string;
    helper?: string;
    placeholder?: string;
    searchLabel?: string;
    createDomains?: string[];
    /**
     * Show only devices with entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no devices with entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only devices with entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * List of devices to be excluded.
     * @type {Array}
     * @attr exclude-devices
     */
    excludeDevices?: string[];
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: HaDevicePickerEntityFilterFunc;
    hideClearIcon: boolean;
    private _picker?;
    private _configEntryLookup;
    private _getDevicesMemoized;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    private _loadConfigEntries;
    private _getItems;
    private _valueRenderer;
    private _rowRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    open(): Promise<void>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-picker": HaDevicePicker;
    }
}
