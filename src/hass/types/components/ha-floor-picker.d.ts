import type { HassEntity } from "home-assistant-js-websocket";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import type { HaDevicePickerDeviceFilterFunc } from "./device/ha-device-picker";
import "./ha-combo-box-item";
import "./ha-floor-icon";
import "./ha-generic-picker";
import "./ha-icon-button";
import "./ha-svg-icon";
export declare class HaFloorPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: string;
    helper?: string;
    placeholder?: string;
    noAdd: boolean;
    /**
     * Show only floors with entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no floors with entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only floors with entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * List of floors to be excluded.
     * @type {Array}
     * @attr exclude-floors
     */
    excludeFloors?: string[];
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: (entity: HassEntity) => boolean;
    disabled: boolean;
    required: boolean;
    private _picker?;
    open(): Promise<void>;
    private _computeValueRenderer;
    private _getFloors;
    private _rowRenderer;
    private _getItems;
    private _allFloorNames;
    private _getAdditionalItems;
    protected render(): TemplateResult;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-floor-picker": HaFloorPicker;
    }
}
