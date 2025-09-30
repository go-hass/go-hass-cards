import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-list";
import "../../../components/ha-list-item";
import "../../../components/ha-svg-icon";
import "../../../components/ha-switch";
import type { CloudStatus } from "../../../data/cloud";
import type { ExposeEntitySettings } from "../../../data/expose";
import type { HomeAssistant } from "../../../types";
export declare class AssistPref extends LitElement {
    hass: HomeAssistant;
    exposedEntities?: Record<string, ExposeEntitySettings>;
    cloudStatus?: CloudStatus;
    private _pipelines;
    private _preferred;
    private _pipelineEntitiesCount;
    private _exposeNew?;
    protected willUpdate(): void;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _exposedEntitiesCount;
    protected render(): import("lit-html").TemplateResult<1>;
    private _exposeNewToggleChanged;
    private _talkWithPipeline;
    private _setPreferredPipeline;
    private _debugPipeline;
    private _deletePipeline;
    private _editPipeline;
    private _addPipeline;
    private _openDialog;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-pref": AssistPref;
    }
}
