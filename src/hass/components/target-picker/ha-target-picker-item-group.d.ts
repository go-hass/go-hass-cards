import { LitElement } from "lit";
import type { HaEntityPickerEntityFilterFunc } from "../../data/entity";
import type { TargetType, TargetTypeFloorless } from "../../data/target";
import type { HomeAssistant } from "../../types";
import type { HaDevicePickerDeviceFilterFunc } from "../device/ha-device-picker";
import "../ha-expansion-panel";
import "../ha-md-list";
import "./ha-target-picker-item-row";
export declare class HaTargetPickerItemGroup extends LitElement {
    hass: HomeAssistant;
    type: TargetTypeFloorless;
    items: Partial<Record<TargetType, string[]>>;
    collapsed: boolean;
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: HaEntityPickerEntityFilterFunc;
    /**
     * Show only targets with entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show only targets with entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    protected render(): import("lit-html").TemplateResult<1>;
    private _expandedChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-target-picker-item-group": HaTargetPickerItemGroup;
    }
}
