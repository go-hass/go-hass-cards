import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-ripple";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tooltip";
import type { EntityRegistryEntry } from "../../../data/entity_registry";
import type { IntegrationLogInfo, IntegrationManifest } from "../../../data/integration";
import type { HomeAssistant } from "../../../types";
import type { ConfigEntryExtended } from "./ha-config-integrations";
import "./ha-integration-header";
export declare class HaIntegrationCard extends LitElement {
    hass: HomeAssistant;
    domain: string;
    items: ConfigEntryExtended[];
    manifest?: IntegrationManifest;
    entityRegistryEntries: EntityRegistryEntry[];
    supportsDiagnostics: boolean;
    logInfo?: IntegrationLogInfo;
    domainEntities: string[];
    protected render(): TemplateResult;
    private _renderSingleEntry;
    private _getState;
    private _getEntityCount;
    private _getDevices;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-integration-card": HaIntegrationCard;
    }
}
