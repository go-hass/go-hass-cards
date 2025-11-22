import type { DeviceTrigger } from "../../data/device_automation";
import { HaDeviceAutomationPicker } from "./ha-device-automation-picker";
declare class HaDeviceTriggerPicker extends HaDeviceAutomationPicker<DeviceTrigger> {
    protected get NO_AUTOMATION_TEXT(): string;
    protected get UNKNOWN_AUTOMATION_TEXT(): string;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-trigger-picker": HaDeviceTriggerPicker;
    }
}
export {};
