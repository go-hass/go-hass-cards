import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-bar";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-check-list-item";
import "../../../components/ha-list-item";
import "../../../components/ha-metric";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "../dashboard/ha-config-updates";
declare class HaConfigSectionUpdates extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _showSkipped;
    private _supervisorInfo?;
    protected firstUpdated(changedProps: any): void;
    protected render(): TemplateResult;
    private _refreshSupervisorInfo;
    private _toggleSkipped;
    private _toggleBeta;
    private _setChannel;
    private _checkUpdates;
    private _filterUpdateEntitiesWithInstall;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-section-updates": HaConfigSectionUpdates;
    }
}
export {};
