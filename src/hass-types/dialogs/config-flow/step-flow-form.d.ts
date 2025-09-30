import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-button";
import "../../components/ha-alert";
import "../../components/ha-form/ha-form";
import "../../components/ha-markdown";
import "../../components/ha-spinner";
import type { DataEntryFlowStepForm } from "../../data/data_entry_flow";
import type { HomeAssistant } from "../../types";
import type { FlowConfig } from "./show-dialog-data-entry-flow";
declare class StepFlowForm extends LitElement {
    flowConfig: FlowConfig;
    narrow: boolean;
    step: DataEntryFlowStepForm;
    hass: HomeAssistant;
    private _loading;
    private _stepData?;
    private _previewErrors?;
    private _submitErrors?;
    private _errorMsg?;
    private _errors?;
    disconnectedCallback(): void;
    private handleReadOnlyFields;
    protected render(): TemplateResult;
    private _setError;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected willUpdate(changedProps: PropertyValues): void;
    private _clickHandler;
    private _handleKeyDown;
    private get _stepDataProcessed();
    private _submitStep;
    private _stepDataChanged;
    private _labelCallback;
    private _helperCallback;
    private _errorCallback;
    private _localizeValueCallback;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HASSDomEvents {
        "set-flow-errors": {
            errors: DataEntryFlowStepForm["errors"];
        };
    }
    interface HTMLElementTagNameMap {
        "step-flow-form": StepFlowForm;
    }
}
export {};
