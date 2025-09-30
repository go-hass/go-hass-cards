import type { Context, HomeAssistant } from "../types";
import type { BlueprintAutomationConfig, ManualAutomationConfig } from "./automation";
import type { BlueprintScriptConfig, ScriptConfig } from "./script";
interface BaseTraceStep {
    path: string;
    timestamp: string;
    error?: string;
    changed_variables?: Record<string, unknown>;
}
export interface TriggerTraceStep extends BaseTraceStep {
    changed_variables: {
        trigger: {
            alias?: string;
            description: string;
            [key: string]: unknown;
        };
        [key: string]: unknown;
    };
}
export interface ConditionTraceStep extends BaseTraceStep {
    result?: {
        result: boolean;
    };
}
export interface CallServiceActionTraceStep extends BaseTraceStep {
    result?: {
        limit: number;
        running_script: boolean;
        params: Record<string, unknown>;
    };
    child_id?: {
        domain: string;
        item_id: string;
        run_id: string;
    };
}
export interface ChooseActionTraceStep extends BaseTraceStep {
    result?: {
        choice: number | "default";
    };
}
export interface IfActionTraceStep extends BaseTraceStep {
    result?: {
        choice: "then" | "else";
    };
}
export interface StopActionTraceStep extends BaseTraceStep {
    result?: {
        stop: string;
        error: boolean;
    };
}
export interface ChooseChoiceActionTraceStep extends BaseTraceStep {
    result?: {
        result: boolean;
    };
}
export type ActionTraceStep = BaseTraceStep | ConditionTraceStep | CallServiceActionTraceStep | ChooseActionTraceStep | ChooseChoiceActionTraceStep;
interface BaseTrace {
    domain: string;
    item_id: string;
    last_step: string | null;
    run_id: string;
    state: "running" | "stopped" | "debugged";
    timestamp: {
        start: string;
        finish: string | null;
    };
    script_execution: // The script was not executed because the automation's condition failed
    "failed_conditions" | "failed_single" | "failed_max_runs" | "finished" | "aborted" | "error" | "cancelled";
}
interface BaseTraceExtended {
    trace: Record<string, ActionTraceStep[]>;
    context: Context;
    error?: string;
}
export interface AutomationTrace extends BaseTrace {
    domain: "automation";
    trigger: string;
}
export interface AutomationTraceExtended extends AutomationTrace, BaseTraceExtended {
    config: ManualAutomationConfig;
    blueprint_inputs?: BlueprintAutomationConfig;
}
export interface ScriptTrace extends BaseTrace {
    domain: "script";
}
export interface ScriptTraceExtended extends ScriptTrace, BaseTraceExtended {
    config: ScriptConfig;
    blueprint_inputs?: BlueprintScriptConfig;
}
export type TraceExtended = AutomationTraceExtended | ScriptTraceExtended;
interface TraceTypes {
    automation: {
        short: AutomationTrace;
        extended: AutomationTraceExtended;
    };
    script: {
        short: ScriptTrace;
        extended: ScriptTraceExtended;
    };
}
export declare const loadTrace: <T extends keyof TraceTypes>(hass: HomeAssistant, domain: T, item_id: string, run_id: string) => Promise<TraceTypes[T]["extended"]>;
export declare const loadTraces: <T extends keyof TraceTypes>(hass: HomeAssistant, domain: T, item_id: string) => Promise<TraceTypes[T]["short"][]>;
export type TraceContexts = Record<string, {
    run_id: string;
    domain: string;
    item_id: string;
}>;
export declare const loadTraceContexts: (hass: HomeAssistant, domain?: string, item_id?: string) => Promise<TraceContexts>;
export declare const getDataFromPath: (config: TraceExtended["config"], path: string) => any;
export declare const isTriggerPath: (path: string) => boolean;
export declare const getTriggerPathFromTrace: (steps: Record<string, BaseTraceStep[]>) => string | undefined;
export {};
