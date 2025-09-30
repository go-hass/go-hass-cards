import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-code-editor";
import "../ha-icon-button";
import "./hat-logbook-note";
import type { LogbookEntry } from "../../data/logbook";
import type { TraceExtended } from "../../data/trace";
import "../../panels/logbook/ha-logbook-renderer";
import type { HomeAssistant } from "../../types";
import type { NodeInfo } from "./hat-script-graph";
import type { EntityRegistryEntry } from "../../data/entity_registry";
import type { LabelRegistryEntry } from "../../data/label_registry";
import type { FloorRegistryEntry } from "../../data/floor_registry";
export declare class HaTracePathDetails extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    trace: TraceExtended;
    logbookEntries: LogbookEntry[];
    selected: NodeInfo;
    renderedNodes: Record<string, any>;
    trackedNodes: Record<string, any>;
    private _view;
    _entityReg: EntityRegistryEntry[];
    _labelReg: LabelRegistryEntry[];
    _floorReg: Record<string, FloorRegistryEntry>;
    protected render(): TemplateResult;
    private _renderSelectedTraceInfo;
    private _renderSelectedConfig;
    private _renderChangedVars;
    private _renderLogbook;
    private _showTab;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-trace-path-details": HaTracePathDetails;
    }
}
