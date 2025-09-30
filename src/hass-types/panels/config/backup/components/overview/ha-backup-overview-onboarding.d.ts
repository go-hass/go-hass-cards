import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../../types";
declare global {
    interface HASSDomEvents {
        "button-click": undefined;
    }
}
declare class HaBackupOverviewBackups extends LitElement {
    hass: HomeAssistant;
    private _setup;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-overview-onboarding": HaBackupOverviewBackups;
    }
}
export {};
