import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-progress-ring";
import "../../components/ha-spinner";
import type { DataEntryFlowStepProgress } from "../../data/data_entry_flow";
import type { HomeAssistant } from "../../types";
import type { FlowConfig } from "./show-dialog-data-entry-flow";
declare class StepFlowProgress extends LitElement {
    flowConfig: FlowConfig;
    hass: HomeAssistant;
    step: DataEntryFlowStepProgress;
    progress?: number;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-progress": StepFlowProgress;
    }
}
export {};
