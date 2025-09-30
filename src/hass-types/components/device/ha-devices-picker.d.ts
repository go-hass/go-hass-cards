import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "./ha-device-picker";
import type { HaDevicePickerDeviceFilterFunc, HaDevicePickerEntityFilterFunc } from "./ha-device-picker";
declare class HaDevicesPicker extends LitElement {
    hass?: HomeAssistant;
    value?: string[];
    helper?: string;
    disabled: boolean;
    required: boolean;
    /**
     * Show entities from specific domains.
     * @type {string}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    includeDeviceClasses?: string[];
    pickedDeviceLabel?: string;
    pickDeviceLabel?: string;
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: HaDevicePickerEntityFilterFunc;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private get _currentDevices();
    private _updateDevices;
    private _deviceChanged;
    private _addDevice;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-devices-picker": HaDevicesPicker;
    }
}
export {};
