import { LitElement } from "lit";
import "../../../../components/ha-form/ha-form";
import type { AssistPipeline } from "../../../../data/assist_pipeline";
import type { HomeAssistant } from "../../../../types";
export declare class AssistPipelineDetailConversation extends LitElement {
    hass: HomeAssistant;
    data?: Partial<AssistPipeline>;
    private _supportedLanguages?;
    private _schema;
    private _computeLabel;
    private _computeHelper;
    protected render(): import("lit-html").TemplateResult<1>;
    private _supportedLanguagesChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-pipeline-detail-conversation": AssistPipelineDetailConversation;
    }
}
