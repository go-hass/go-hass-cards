import { LitElement } from "lit";
import "../../../../components/ha-form/ha-form";
import type { AssistPipeline } from "../../../../data/assist_pipeline";
import type { HomeAssistant } from "../../../../types";
export declare class AssistPipelineDetailSTT extends LitElement {
    hass: HomeAssistant;
    data?: Partial<AssistPipeline>;
    private _supportedLanguages?;
    private _schema;
    private _computeLabel;
    protected render(): import("lit-html").TemplateResult<1>;
    private _supportedLanguagesChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-pipeline-detail-stt": AssistPipelineDetailSTT;
    }
}
