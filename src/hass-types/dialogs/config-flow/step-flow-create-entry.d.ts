import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-area-picker";
import "../../components/ha-button";
import type { DataEntryFlowStepCreateEntry } from "../../data/data_entry_flow";
import type { DeviceRegistryEntry } from "../../data/device_registry";
import type { HomeAssistant } from "../../types";
import type { FlowConfig } from "./show-dialog-data-entry-flow";
declare class StepFlowCreateEntry extends LitElement {
    flowConfig: FlowConfig;
    hass: HomeAssistant;
    step: DataEntryFlowStepCreateEntry;
    devices: DeviceRegistryEntry[];
    private _domains;
    navigateToResult: boolean;
    private _deviceUpdate;
    private _deviceEntities;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _loadDomains;
    private _flowDone;
    private _areaPicked;
    private _deviceNameChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-create-entry": StepFlowCreateEntry;
    }
}
export {};
