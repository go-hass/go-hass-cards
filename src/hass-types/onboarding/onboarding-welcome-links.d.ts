import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../common/translations/localize";
import "../components/ha-card";
import type { HomeAssistant } from "../types";
import "./onboarding-welcome-link";
declare class OnboardingWelcomeLinks extends LitElement {
    hass: HomeAssistant;
    localize: LocalizeFunc<any>;
    mobileApp: boolean;
    protected render(): TemplateResult;
    private _openCommunity;
    private _openApp;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-welcome-links": OnboardingWelcomeLinks;
    }
}
export {};
