import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/ha-card";
import "../components/ha-ripple";
import "../components/ha-svg-icon";
declare class OnboardingWelcomeLink extends LitElement {
    label: string;
    iconPath: string;
    noninteractive: boolean;
    protected render(): TemplateResult;
    private _handleKeyDown;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-welcome-link": OnboardingWelcomeLink;
    }
}
export {};
