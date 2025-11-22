import { LitElement, nothing, type PropertyValues } from "lit";
import type { HaEntityPickerEntityFilterFunc } from "../../data/entity";
import type { LabelRegistryEntry } from "../../data/label_registry";
import { type ExtractFromTargetResultReferenced, type TargetType } from "../../data/target";
import type { HomeAssistant } from "../../types";
import type { HaDevicePickerDeviceFilterFunc } from "../device/ha-device-picker";
import "../ha-icon-button";
import "../ha-md-list";
import type { HaMdList } from "../ha-md-list";
import "../ha-md-list-item";
import type { HaMdListItem } from "../ha-md-list-item";
import "../ha-state-icon";
import "../ha-svg-icon";
export declare class HaTargetPickerItemRow extends LitElement {
    hass: HomeAssistant;
    type: TargetType;
    itemId: string;
    expand: boolean;
    subEntry: boolean;
    hideContext: boolean;
    parentEntries?: ExtractFromTargetResultReferenced;
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
    private _iconImg?;
    private _domainName?;
    private _entries?;
    _labelRegistry: LabelRegistryEntry[];
    item?: HaMdListItem;
    list?: HaMdList;
    itemRow?: HaTargetPickerItemRow;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _renderEntries;
    private _updateItemData;
    private _itemData;
    private _setDomainName;
    private _removeItem;
    private _getDeviceDomain;
    private _openDetails;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-target-picker-item-row": HaTargetPickerItemRow;
    }
}
