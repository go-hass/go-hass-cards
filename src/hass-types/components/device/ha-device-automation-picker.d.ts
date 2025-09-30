import { LitElement, nothing } from "lit";
import type { DeviceAutomation } from "../../data/device_automation";
import type { EntityRegistryEntry } from "../../data/entity_registry";
import type { HomeAssistant } from "../../types";
import "../ha-md-select-option";
import "../ha-md-select";
export declare abstract class HaDeviceAutomationPicker<T extends DeviceAutomation> extends LitElement {
    hass: HomeAssistant;
    label?: string;
    deviceId?: string;
    value?: T;
    private _automations;
    private _renderEmpty;
    _entityReg: EntityRegistryEntry[];
    protected get NO_AUTOMATION_TEXT(): string;
    protected get UNKNOWN_AUTOMATION_TEXT(): string;
    private _localizeDeviceAutomation;
    private _fetchDeviceAutomations;
    private _createNoAutomation;
    constructor(localizeDeviceAutomation: HaDeviceAutomationPicker<T>["_localizeDeviceAutomation"], fetchDeviceAutomations: HaDeviceAutomationPicker<T>["_fetchDeviceAutomations"], createNoAutomation: HaDeviceAutomationPicker<T>["_createNoAutomation"]);
    private get _value();
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected updated(changedProps: any): void;
    private _updateDeviceInfo;
    private _automationChanged;
    private _setValue;
    static styles: import("lit").CSSResult;
}
