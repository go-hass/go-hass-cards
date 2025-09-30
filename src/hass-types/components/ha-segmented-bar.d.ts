import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-tooltip";
export interface Segment {
    value: number;
    color: string;
    label?: TemplateResult | string;
}
declare class HaSegmentedBar extends LitElement {
    segments: Segment[];
    heading: string;
    description?: string;
    hideLegend: boolean;
    hideTooltip: boolean;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-segmented-bar": HaSegmentedBar;
    }
}
export {};
