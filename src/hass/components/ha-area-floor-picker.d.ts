import type { HassEntity } from "home-assistant-js-websocket";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import { type AreaFloorValue } from "../data/area_floor";
import type { HomeAssistant } from "../types";
import type { HaDevicePickerDeviceFilterFunc } from "./device/ha-device-picker";
import "./ha-combo-box-item";
import "./ha-floor-icon";
import "./ha-generic-picker";
import "./ha-icon-button";
import "./ha-svg-icon";
import "./ha-tree-indicator";
export declare class HaAreaFloorPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: AreaFloorValue;
    helper?: string;
    placeholder?: string;
    searchLabel?: string;
    /**
     * Show only areas with entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no areas with entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only areas with entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * List of areas to be excluded.
     * @type {Array}
     * @attr exclude-areas
     */
    excludeAreas?: string[];
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
    private _valueRenderer;
    private _rowRenderer;
    private _getAreasAndFloorsMemoized;
    private _getItems;
    private _formatValue;
    private _parseValue;
    protected render(): TemplateResult;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-area-floor-picker": HaAreaFloorPicker;
    }
}
