import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { FrontendLocaleData } from "../data/translation";
export interface LevelDefinition {
    level: number;
    stroke: string;
    label?: string;
}
export declare class HaGauge extends LitElement {
    min: number;
    max: number;
    value: number;
    formatOptions?: Intl.NumberFormatOptions;
    valueText?: string;
    locale: FrontendLocaleData;
    needle: boolean;
    levels?: LevelDefinition[];
    label: string;
    private _angle;
    private _updated;
    private _segment_label?;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): TemplateResult<2>;
    private _rescaleSvg;
    private _getSegmentLabel;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-gauge": HaGauge;
    }
}
