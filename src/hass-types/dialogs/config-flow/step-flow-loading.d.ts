import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-spinner";
import type { DataEntryFlowStep } from "../../data/data_entry_flow";
import type { HomeAssistant } from "../../types";
import type { FlowConfig, LoadingReason } from "./show-dialog-data-entry-flow";
declare class StepFlowLoading extends LitElement {
    flowConfig: FlowConfig;
    hass: HomeAssistant;
    loadingReason: LoadingReason;
    handler?: string;
    step?: DataEntryFlowStep | null;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-loading": StepFlowLoading;
    }
}
export {};
