import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { DataEntryFlowStepAbort } from "../../data/data_entry_flow";
import type { HomeAssistant } from "../../types";
import type { DataEntryFlowDialogParams } from "./show-dialog-data-entry-flow";
import "../../components/ha-button";
declare class StepFlowAbort extends LitElement {
    params: DataEntryFlowDialogParams;
    hass: HomeAssistant;
    step: DataEntryFlowStepAbort;
    domain: string;
    handler: string;
    protected firstUpdated(changed: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleMissingCreds;
    private _flowDone;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-abort": StepFlowAbort;
    }
}
export {};
