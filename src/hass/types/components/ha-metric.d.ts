import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-bar";
import "./ha-settings-row";
declare class HaMetric extends LitElement {
    value: number;
    heading: string;
    tooltip?: string;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-metric": HaMetric;
    }
}
export {};
