import type { PropertyValueMap } from "lit";
import { LitElement, nothing } from "lit";
import type { AssistPipeline } from "../data/assist_pipeline";
import type { HomeAssistant } from "../types";
import "./ha-list-item";
import "./ha-select";
export declare class HaAssistPipelinePicker extends LitElement {
    value?: string;
    label?: string;
    hass: HomeAssistant;
    disabled: boolean;
    required: boolean;
    includeLastUsed: boolean;
    _pipelines?: AssistPipeline[];
    _preferredPipeline: string | null;
    private get _default();
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected firstUpdated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-assist-pipeline-picker": HaAssistPipelinePicker;
    }
}
