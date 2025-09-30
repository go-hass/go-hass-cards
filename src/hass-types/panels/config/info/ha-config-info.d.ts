import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-next";
import "../../../components/ha-list";
import "../../../components/ha-list-item";
import "../../../components/ha-logo-svg";
import "../../../components/ha-md-list";
import "../../../components/ha-md-list-item";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
declare class HaConfigInfo extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    showAdvanced: boolean;
    route: Route;
    private _osInfo?;
    private _hassioInfo?;
    private _installationMethod?;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: any): void;
    private _loadSupervisorInfo;
    private _showShortcuts;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-info": HaConfigInfo;
    }
}
export {};
