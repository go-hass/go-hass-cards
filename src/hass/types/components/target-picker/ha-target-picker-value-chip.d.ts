import { LitElement } from "lit";
import type { LabelRegistryEntry } from "../../data/label_registry";
import type { TargetType } from "../../data/target";
import type { HomeAssistant } from "../../types";
import "../ha-icon";
import "../ha-icon-button";
import "../ha-md-list";
import "../ha-md-list-item";
import "../ha-state-icon";
import "../ha-tooltip";
export declare class HaTargetPickerValueChip extends LitElement {
    hass: HomeAssistant;
    type: TargetType;
    itemId: string;
    private _domainName?;
    private _iconImg?;
    _labelRegistry: LabelRegistryEntry[];
    protected render(): import("lit-html").TemplateResult<1>;
    private _itemData;
    private _setDomainName;
    private _getDeviceDomain;
    private _removeItem;
    private _handleExpand;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-target-picker-value-chip": HaTargetPickerValueChip;
    }
}
