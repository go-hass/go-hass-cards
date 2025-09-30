import type { DeviceAction } from "../../data/device_automation";
import { HaDeviceAutomationPicker } from "./ha-device-automation-picker";
declare class HaDeviceActionPicker extends HaDeviceAutomationPicker<DeviceAction> {
    protected get NO_AUTOMATION_TEXT(): string;
    protected get UNKNOWN_AUTOMATION_TEXT(): string;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-action-picker": HaDeviceActionPicker;
    }
}
export {};
