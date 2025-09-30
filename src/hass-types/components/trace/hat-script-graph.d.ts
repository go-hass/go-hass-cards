import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { TraceExtended } from "../../data/trace";
import type { HomeAssistant } from "../../types";
import "../ha-icon-button";
import "../ha-service-icon";
import "./hat-graph-branch";
import "./hat-graph-node";
import "./hat-graph-spacer";
type NodeType = "trigger" | "condition" | "action" | "chooseOption" | undefined;
export interface NodeInfo {
    path: string;
    config: any;
    type?: NodeType;
}
declare global {
    interface HASSDomEvents {
        "graph-node-selected": NodeInfo;
    }
}
export declare class HatScriptGraph extends LitElement {
    trace: TraceExtended;
    selected?: string;
    hass: HomeAssistant;
    renderedNodes: Record<string, NodeInfo>;
    trackedNodes: Record<string, NodeInfo>;
    private _selectNode;
    private _renderTrigger;
    private _renderCondition;
    private _typeRenderers;
    private _renderActionNode;
    private _renderChooseNode;
    private _renderIfNode;
    private _renderConditionNode;
    private _renderRepeatNode;
    private _renderServiceNode;
    private _renderWaitNode;
    private _renderSequenceNode;
    private _renderParallelNode;
    private _renderOtherNode;
    protected render(): import("lit-html").TemplateResult<1>;
    willUpdate(changedProps: PropertyValues<this>): void;
    protected updated(changedProps: PropertyValues<this>): void;
    private _previousTrackedNode;
    private _nextTrackedNode;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-script-graph": HatScriptGraph;
    }
}
export {};
