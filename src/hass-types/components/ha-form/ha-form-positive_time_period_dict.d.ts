import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-duration-input";
import type { HaFormElement, HaFormTimeData, HaFormTimeSchema } from "./types";
export declare class HaFormTimePeriod extends LitElement implements HaFormElement {
    schema: HaFormTimeSchema;
    data: HaFormTimeData;
    label: string;
    disabled: boolean;
    private _input?;
    focus(): void;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-positive_time_period_dict": HaFormTimePeriod;
    }
}
