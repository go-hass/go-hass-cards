import { LitElement } from "lit";
import type { DeviceRegistryEntry } from "../../../../../../data/device_registry";
import type { HomeAssistant } from "../../../../../../types";
import "../../../../../../components/ha-button";
import "../../../../../../components/buttons/ha-progress-button";
import "../../../../../../components/ha-textfield";
import "../../../../../../components/ha-select";
import "../../../../../../components/ha-list-item";
import "../../../../../../components/ha-alert";
import "../../../../../../components/ha-switch";
import "../../../../../../components/ha-formfield";
import "../../../../../../components/ha-spinner";
declare class ZWaveJSCapabilityDoorLock extends LitElement {
    hass: HomeAssistant;
    device: DeviceRegistryEntry;
    endpoint: number;
    command_class: number;
    version: number;
    private _configuration?;
    private _capabilities?;
    private _currentDoorLockMode?;
    private _error?;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(): void;
    private _loadConfiguration;
    private _loadCapabilities;
    private _loadCurrentDoorLockMode;
    private _isValid;
    private _operationTypeChanged;
    private _booleanChanged;
    private _numberChanged;
    private _doorLockModeChanged;
    private _saveConfig;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-capability-control-door_lock": ZWaveJSCapabilityDoorLock;
    }
}
export {};
