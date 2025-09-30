import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/device/ha-device-picker";
import "../../../../../components/device/ha-device-trigger-picker";
import "../../../../../components/ha-form/ha-form";
import type { DeviceTrigger } from "../../../../../data/device_automation";
import type { EntityRegistryEntry } from "../../../../../data/entity_registry";
import type { HomeAssistant } from "../../../../../types";
export declare class HaDeviceTrigger extends LitElement {
    hass: HomeAssistant;
    trigger: DeviceTrigger;
    disabled: boolean;
    private _deviceId?;
    private _capabilities?;
    _entityReg: EntityRegistryEntry[];
    private _origTrigger?;
    static get defaultConfig(): DeviceTrigger;
    private _extraFieldsData;
    shouldUpdate(changedProperties: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(): void;
    protected updated(changedProps: any): void;
    private _getCapabilities;
    private _devicePicked;
    private _deviceTriggerPicked;
    private _extraFieldsChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-device": HaDeviceTrigger;
    }
}
