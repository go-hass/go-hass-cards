import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
import "../components/ha-button";
import "../components/ha-divider";
import "../components/ha-md-list";
import "../components/ha-md-list-item";
import "../components/ha-icon-button-next";
declare class OnboardingWelcome extends LitElement {
    hass: HomeAssistant;
    localize: LocalizeFunc;
    protected render(): TemplateResult;
    private _start;
    private _restoreBackupUpload;
    private _restoreBackupCloud;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-welcome": OnboardingWelcome;
    }
}
export {};
