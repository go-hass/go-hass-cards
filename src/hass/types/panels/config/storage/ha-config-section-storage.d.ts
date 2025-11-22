import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-icon-button";
import "../../../components/ha-icon-next";
import "../../../components/ha-list";
import "../../../components/ha-list-item";
import "../../../components/ha-segmented-bar";
import "../../../components/ha-svg-icon";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "../core/ha-config-analytics";
declare class HaConfigSectionStorage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    private _error?;
    private _hostInfo?;
    private _storageInfo?;
    private _mountsInfo?;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected render(): TemplateResult | typeof nothing;
    private _renderDiskLifeTime;
    private _renderStorageMetrics;
    private _bytesToGB;
    private _gbToBytes;
    private _load;
    private _loadStorageInfo;
    private _moveDatadisk;
    private _navigateToUpdates;
    private _reloadMount;
    private _addMount;
    private _changeMount;
    private _reloadMounts;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-section-storage": HaConfigSectionStorage;
    }
}
export {};
