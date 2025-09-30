import type { TemplateResult } from "lit";
import { LitElement } from "lit";
declare class OnboardingLoading extends LitElement {
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-loading": OnboardingLoading;
    }
}
export {};
