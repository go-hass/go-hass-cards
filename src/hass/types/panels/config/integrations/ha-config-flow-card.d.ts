import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-list-item";
import type { IntegrationManifest } from "../../../data/integration";
import type { HomeAssistant } from "../../../types";
import type { DataEntryFlowProgressExtended } from "./ha-config-integrations";
import "./ha-integration-action-card";
export declare class HaConfigFlowCard extends LitElement {
    hass: HomeAssistant;
    flow: DataEntryFlowProgressExtended;
    manifest?: IntegrationManifest;
    protected render(): TemplateResult;
    private _continueFlow;
    private _ignoreFlow;
    private _handleFlowUpdated;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-flow-card": HaConfigFlowCard;
    }
}
