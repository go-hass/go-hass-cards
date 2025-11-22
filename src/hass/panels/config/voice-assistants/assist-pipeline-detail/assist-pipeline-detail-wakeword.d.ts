import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-form/ha-form";
import type { AssistPipeline } from "../../../../data/assist_pipeline";
import type { HomeAssistant } from "../../../../types";
export declare class AssistPipelineDetailWakeWord extends LitElement {
    hass: HomeAssistant;
    data?: Partial<AssistPipeline>;
    private _wakeWords?;
    private _schema;
    private _computeLabel;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _fetchWakeWords;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-pipeline-detail-wakeword": AssistPipelineDetailWakeWord;
    }
}
