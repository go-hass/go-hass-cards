import { LitElement } from "lit";
import type { DeviceRegistryEntry } from "../../../../../../data/device_registry";
import type { HomeAssistant } from "../../../../../../types";
import "../../../../../../components/ha-alert";
import "../../../../../../components/ha-spinner";
import "./zwave_js-capability-control-multilevel-switch";
declare class ZWaveJSCapabilityColorSwitch extends LitElement {
    hass: HomeAssistant;
    device: DeviceRegistryEntry;
    endpoint: number;
    command_class: number;
    version: number;
    private _color_components?;
    private _error?;
    protected render(): import("lit-html").TemplateResult<1> | import("lit-html").TemplateResult<1>[];
    protected firstUpdated(): Promise<void>;
    private _transformOptions;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-capability-control-color_switch": ZWaveJSCapabilityColorSwitch;
    }
}
export {};
