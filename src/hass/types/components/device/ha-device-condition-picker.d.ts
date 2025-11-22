import type { DeviceCondition } from "../../data/device_automation";
import { HaDeviceAutomationPicker } from "./ha-device-automation-picker";
declare class HaDeviceConditionPicker extends HaDeviceAutomationPicker<DeviceCondition> {
    protected get NO_AUTOMATION_TEXT(): string;
    protected get UNKNOWN_AUTOMATION_TEXT(): string;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-condition-picker": HaDeviceConditionPicker;
    }
}
export {};
