import { LitElement } from "lit";
import type { ConfigEntry, SubEntry } from "../../../data/config_entries";
import type { DiagnosticInfo } from "../../../data/diagnostics";
import type { EntityRegistryEntry } from "../../../data/entity_registry";
import type { IntegrationManifest } from "../../../data/integration";
import type { HomeAssistant } from "../../../types";
import "./ha-config-entry-device-row";
declare class HaConfigSubEntryRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    manifest?: IntegrationManifest;
    diagnosticHandler?: DiagnosticInfo;
    entities: EntityRegistryEntry[];
    entry: ConfigEntry;
    subEntry: SubEntry;
    private _expanded;
    protected render(): import("lit-html").TemplateResult<1>;
    private _toggleExpand;
    private _getEntities;
    private _getDevices;
    private _getServices;
    private _handleReconfigureSub;
    private _handleRenameSub;
    private _handleDeleteSub;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-sub-entry-row": HaConfigSubEntryRow;
    }
}
export {};
