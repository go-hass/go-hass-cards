import { LitElement } from "lit";
import "../../../../../../components/buttons/ha-progress-button";
import type { DeviceRegistryEntry } from "../../../../../../data/device_registry";
import type { HomeAssistant } from "../../../../../../types";
import "../../../../../../components/ha-textfield";
import "../../../../../../components/ha-select";
import "../../../../../../components/ha-list-item";
import "../../../../../../components/ha-alert";
import "../../../../../../components/ha-formfield";
import "../../../../../../components/ha-switch";
declare class ZWaveJSCapabilityMultiLevelSwitch extends LitElement {
    hass: HomeAssistant;
    device: DeviceRegistryEntry;
    endpoint: number;
    command_class: number;
    version: number;
    transform_options?: (opts: Record<string, any>, control: string) => unknown;
    private _error?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _controlTransition;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-capability-control-multilevel_switch": ZWaveJSCapabilityMultiLevelSwitch;
    }
}
export {};
