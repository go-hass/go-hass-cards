import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-select";
import "../../../../../components/ha-list-item";
import type { ZHADevice } from "../../../../../data/zha";
import type { HomeAssistant } from "../../../../../types";
export declare class ZHADeviceBindingControl extends LitElement {
    hass?: HomeAssistant;
    device?: ZHADevice;
    private _bindTargetIndex;
    private bindableDevices;
    private _deviceToBind?;
    private _bindingOperationInProgress;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private _bindTargetIndexChanged;
    private _onBindDevicesClick;
    private _onUnbindDevicesClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-device-binding-control": ZHADeviceBindingControl;
    }
}
