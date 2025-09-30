import { LitElement } from "lit";
import type { DeviceRegistryEntry } from "../../../../../../data/device_registry";
import type { HomeAssistant } from "../../../../../../types";
import "../../../../../../components/ha-button";
import "../../../../../../components/buttons/ha-progress-button";
import "../../../../../../components/ha-textfield";
import "../../../../../../components/ha-select";
import "../../../../../../components/ha-list-item";
import "../../../../../../components/ha-alert";
declare class ZWaveJSCapabilityThermostatSetback extends LitElement {
    hass: HomeAssistant;
    device: DeviceRegistryEntry;
    endpoint: number;
    command_class: number;
    version: number;
    private _disableSetbackState;
    private _setbackTypeInput;
    private _setbackStateInput;
    private _setbackSpecialStateSelect;
    private _error?;
    private _loading;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(): void;
    private _loadSetback;
    private _changeSpecialState;
    private _saveSetback;
    private _clear;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-capability-control-thermostat_setback": ZWaveJSCapabilityThermostatSetback;
    }
}
export {};
