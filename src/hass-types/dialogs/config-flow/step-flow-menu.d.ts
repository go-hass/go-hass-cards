import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-icon-next";
import "../../components/ha-list-item";
import type { DataEntryFlowStepMenu } from "../../data/data_entry_flow";
import type { HomeAssistant } from "../../types";
import type { FlowConfig } from "./show-dialog-data-entry-flow";
declare class StepFlowMenu extends LitElement {
    flowConfig: FlowConfig;
    hass: HomeAssistant;
    step: DataEntryFlowStepMenu;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): TemplateResult;
    private _handleStep;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-menu": StepFlowMenu;
    }
}
export {};
