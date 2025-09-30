import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LogbookEntry } from "../../data/logbook";
import type { HomeAssistant } from "../../types";
import "./hat-logbook-note";
import "../../panels/logbook/ha-logbook-renderer";
import type { TraceExtended } from "../../data/trace";
export declare class HaTraceLogbook extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    trace: TraceExtended;
    logbookEntries: LogbookEntry[];
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-trace-logbook": HaTraceLogbook;
    }
}
