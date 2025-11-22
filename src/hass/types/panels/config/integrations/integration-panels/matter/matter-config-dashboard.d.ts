import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-card";
import "../../../../../components/ha-button";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../../types";
export declare class MatterConfigDashboard extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _error?;
    private _unsub?;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private _redirectOnNewMatterDevice;
    private _stopRedirect;
    private _startMobileCommissioning;
    private _setWifi;
    private _commission;
    private _acceptSharedDevice;
    private _setThread;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-config-dashboard": MatterConfigDashboard;
    }
}
