import { LitElement } from "lit";
import type { HomeAssistant, Route } from "../../../../types";
import "./assist-pipeline-debug";
import "./assist-pipeline-run-debug";
export declare class AssistDebug extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-debug": AssistDebug;
    }
}
