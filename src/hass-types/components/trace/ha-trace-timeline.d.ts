import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "./hat-logbook-note";
import "./hat-trace-timeline";
import type { LogbookEntry } from "../../data/logbook";
import type { TraceExtended } from "../../data/trace";
import type { HomeAssistant } from "../../types";
import type { NodeInfo } from "./hat-script-graph";
export declare class HaTraceTimeline extends LitElement {
    hass: HomeAssistant;
    trace: TraceExtended;
    logbookEntries: LogbookEntry[];
    selected: NodeInfo;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-trace-timeline": HaTraceTimeline;
    }
}
