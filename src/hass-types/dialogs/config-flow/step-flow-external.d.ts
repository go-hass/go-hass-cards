import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { DataEntryFlowStepExternal } from "../../data/data_entry_flow";
import type { HomeAssistant } from "../../types";
import type { FlowConfig } from "./show-dialog-data-entry-flow";
import "../../components/ha-button";
declare class StepFlowExternal extends LitElement {
    flowConfig: FlowConfig;
    hass: HomeAssistant;
    step: DataEntryFlowStepExternal;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: any): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-external": StepFlowExternal;
    }
}
export {};
