import { LitElement } from "lit";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../types";
import "./assist-render-pipeline-events";
export declare class AssistPipelineDebug extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    pipelineId: string;
    private _runId?;
    private _runs?;
    private _events?;
    private _unsubRefreshEventsID?;
    protected render(): import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: any): void;
    disconnectedCallback(): void;
    private _fetchRuns;
    private _fetchEvents;
    private _pickOlderRun;
    private _pickNewerRun;
    private _pickRun;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-pipeline-debug": AssistPipelineDebug;
    }
}
