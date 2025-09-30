import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { GenDataTask, GenDataTaskResult } from "../data/ai_task";
import "./chips/ha-assist-chip";
import "./ha-svg-icon";
import type { HomeAssistant } from "../types";
declare global {
    interface HASSDomEvents {
        suggestion: GenDataTaskResult;
    }
}
export interface SuggestWithAIGenerateTask {
    type: "data";
    task: GenDataTask;
}
export declare class HaSuggestWithAIButton extends LitElement {
    hass: HomeAssistant;
    taskType: "data";
    generateTask: () => SuggestWithAIGenerateTask;
    private _aiPrefs?;
    private _state;
    private _minWidth?;
    private _intervalId?;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _suggest;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-suggest-with-ai-button": HaSuggestWithAIButton;
    }
}
