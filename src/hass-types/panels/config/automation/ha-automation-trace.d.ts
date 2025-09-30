import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import "../../../components/trace/ha-trace-blueprint-config";
import "../../../components/trace/ha-trace-config";
import "../../../components/trace/ha-trace-logbook";
import "../../../components/trace/ha-trace-path-details";
import "../../../components/trace/ha-trace-timeline";
import "../../../components/trace/hat-script-graph";
import type { AutomationEntity } from "../../../data/automation";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
export declare class HaAutomationTrace extends LitElement {
    hass: HomeAssistant;
    automationId: string;
    automations: AutomationEntity[];
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _entityId?;
    private _traces?;
    private _runId?;
    private _selected?;
    private _trace?;
    private _logbookEntries?;
    private _view;
    private _graph?;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: any): void;
    protected updated(changedProps: any): void;
    private _pickOlderTrace;
    private _pickNewerTrace;
    private _pickTrace;
    private _pickNode;
    private _refreshTraces;
    private _loadTraces;
    private _loadTrace;
    private _downloadTrace;
    private _importTrace;
    private _loadLocalStorageTrace;
    private _loadLocalTrace;
    private _showTab;
    private _timelinePathPicked;
    private _showInfo;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trace": HaAutomationTrace;
    }
}
