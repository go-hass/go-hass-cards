import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-spinner";
import "../../../../components/ha-expansion-panel";
import type { PipelineRun } from "../../../../data/assist_pipeline";
import type { HomeAssistant } from "../../../../types";
import "../../../../components/ha-yaml-editor";
export declare class AssistPipelineDebug extends LitElement {
    hass: HomeAssistant;
    pipelineRun: PipelineRun;
    protected render(): TemplateResult;
    private _playTTS;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-render-pipeline-run": AssistPipelineDebug;
    }
}
