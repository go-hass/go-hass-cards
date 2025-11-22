import { LitElement } from "lit";
import "../../../../components/ha-form/ha-form";
import type { AssistPipeline } from "../../../../data/assist_pipeline";
import type { HomeAssistant } from "../../../../types";
export declare class AssistPipelineDetailConfig extends LitElement {
    hass: HomeAssistant;
    data?: Partial<AssistPipeline>;
    supportedLanguages?: string[];
    focus(): Promise<void>;
    private _schema;
    private _computeLabel;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-pipeline-detail-config": AssistPipelineDetailConfig;
    }
}
