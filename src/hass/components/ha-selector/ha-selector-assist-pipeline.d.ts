import { LitElement } from "lit";
import type { AssistPipelineSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-assist-pipeline-picker";
export declare class HaAssistPipelineSelector extends LitElement {
    hass: HomeAssistant;
    selector: AssistPipelineSelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-assist_pipeline": HaAssistPipelineSelector;
    }
}
