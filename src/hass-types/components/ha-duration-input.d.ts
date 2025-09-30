import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-base-time-input";
export interface HaDurationData {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
}
declare class HaDurationInput extends LitElement {
    data?: HaDurationData;
    label?: string;
    helper?: string;
    required: boolean;
    enableMillisecond: boolean;
    enableDay: boolean;
    disabled: boolean;
    protected render(): TemplateResult;
    private get _days();
    private get _hours();
    private get _minutes();
    private get _seconds();
    private get _milliseconds();
    private _durationChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-duration-input": HaDurationInput;
    }
}
export {};
