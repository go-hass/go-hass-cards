import type { HassEntityAttributeBase, HassEntityBase, HassServiceTarget } from "home-assistant-js-websocket";
import type { Describe } from "superstruct";
import type { HomeAssistant } from "../types";
import type { Condition, ShorthandAndCondition, ShorthandNotCondition, ShorthandOrCondition, Trigger } from "./automation";
import type { BlueprintInput } from "./blueprint";
export declare const MODES: readonly ["single", "restart", "queued", "parallel"];
export declare const MODES_MAX: readonly ["queued", "parallel"];
export declare const isMaxMode: (searchElement: unknown, fromIndex?: number) => searchElement is "queued" | "parallel";
export declare const baseActionStruct: import("superstruct").Struct<{
    alias: string;
    continue_on_error: boolean;
    enabled: boolean;
}, {
    alias: import("superstruct").Struct<string, null>;
    continue_on_error: import("superstruct").Struct<boolean, null>;
    enabled: import("superstruct").Struct<boolean, null>;
}>;
export declare const targetStruct: import("superstruct").Struct<{
    entity_id: string | string[];
    area_id: string | string[];
    floor_id: string | string[];
    device_id: string | string[];
    label_id: string | string[];
}, {
    entity_id: import("superstruct").Struct<string | string[], null>;
    device_id: import("superstruct").Struct<string | string[], null>;
    area_id: import("superstruct").Struct<string | string[], null>;
    floor_id: import("superstruct").Struct<string | string[], null>;
    label_id: import("superstruct").Struct<string | string[], null>;
}>;
export declare const serviceActionStruct: Describe<ServiceActionWithTemplate>;
export interface ScriptEntity extends HassEntityBase {
    attributes: HassEntityAttributeBase & {
        last_triggered: string;
        mode: (typeof MODES)[number];
        current?: number;
        max?: number;
    };
}
export type ScriptConfig = ManualScriptConfig | BlueprintScriptConfig;
export interface ManualScriptConfig {
    alias: string;
    description?: string;
    sequence: Action | Action[];
    icon?: string;
    mode?: (typeof MODES)[number];
    max?: number;
    fields?: Fields;
}
export interface BlueprintScriptConfig extends ManualScriptConfig {
    use_blueprint: {
        path: string;
        input?: BlueprintInput;
    };
}
export type Fields = Record<string, Field>;
export interface Field {
    name?: string;
    description?: string;
    advanced?: boolean;
    required?: boolean;
    example?: string;
    default?: any;
    selector?: any;
}
interface BaseAction {
    alias?: string;
    continue_on_error?: boolean;
    enabled?: boolean;
}
export interface EventAction extends BaseAction {
    event: string;
    event_data?: Record<string, any>;
    event_data_template?: Record<string, any>;
}
export interface ServiceAction extends BaseAction {
    action?: string;
    service_template?: string;
    entity_id?: string;
    target?: HassServiceTarget;
    data?: Record<string, unknown>;
    response_variable?: string;
    metadata?: Record<string, unknown>;
}
type ServiceActionWithTemplate = ServiceAction & {
    target?: HassServiceTarget | string;
};
export type { ServiceActionWithTemplate };
export interface DeviceAction extends BaseAction {
    type: string;
    device_id: string;
    domain: string;
    entity_id: string;
}
export interface DelayActionParts extends BaseAction {
    milliseconds?: number;
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
}
export interface DelayAction extends BaseAction {
    delay: number | Partial<DelayActionParts> | string;
}
export interface WaitAction extends BaseAction {
    wait_template: string;
    timeout?: number;
    continue_on_timeout?: boolean;
}
export interface WaitForTriggerActionParts extends BaseAction {
    milliseconds?: number;
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
}
export interface WaitForTriggerAction extends BaseAction {
    wait_for_trigger: Trigger | Trigger[];
    timeout?: number | Partial<WaitForTriggerActionParts> | string;
    continue_on_timeout?: boolean;
}
export interface RepeatAction extends BaseAction {
    repeat: CountRepeat | WhileRepeat | UntilRepeat | ForEachRepeat;
}
interface BaseRepeat extends BaseAction {
    sequence: Action | Action[];
}
export interface CountRepeat extends BaseRepeat {
    count: number | string;
}
export interface WhileRepeat extends BaseRepeat {
    while: Condition[];
}
export interface UntilRepeat extends BaseRepeat {
    until: Condition[];
}
export interface ForEachRepeat extends BaseRepeat {
    for_each: string | any[];
}
export interface Option {
    alias?: string;
    conditions: string | Condition[];
    sequence: Action | Action[];
}
export interface ChooseAction extends BaseAction {
    choose: Option | Option[] | null;
    default?: Action | Action[];
}
export interface IfAction extends BaseAction {
    if: string | Condition[];
    then: Action | Action[];
    else?: Action | Action[];
}
export interface VariablesAction extends BaseAction {
    variables: Record<string, unknown>;
}
export interface StopAction extends BaseAction {
    stop: string;
    response_variable?: string;
    error?: boolean;
}
export interface SequenceAction extends BaseAction {
    sequence: (ManualScriptConfig | Action)[];
}
export interface ParallelAction extends BaseAction {
    parallel: ManualScriptConfig | Action | (ManualScriptConfig | Action)[];
}
export interface SetConversationResponseAction extends BaseAction {
    set_conversation_response: string;
}
interface UnknownAction extends BaseAction, Record<string, unknown> {
}
export type NonConditionAction = EventAction | DeviceAction | ServiceAction | DelayAction | WaitAction | WaitForTriggerAction | RepeatAction | ChooseAction | IfAction | VariablesAction | StopAction | SequenceAction | ParallelAction | UnknownAction;
export type Action = NonConditionAction | Condition | ShorthandAndCondition | ShorthandOrCondition | ShorthandNotCondition;
export interface ActionTypes {
    delay: DelayAction;
    wait_template: WaitAction;
    check_condition: Condition;
    fire_event: EventAction;
    device_action: DeviceAction;
    repeat: RepeatAction;
    choose: ChooseAction;
    if: IfAction;
    wait_for_trigger: WaitForTriggerAction;
    variables: VariablesAction;
    service: ServiceAction;
    stop: StopAction;
    sequence: SequenceAction;
    parallel: ParallelAction;
    set_conversation_response: SetConversationResponseAction;
    unknown: UnknownAction;
}
export type ActionType = keyof ActionTypes;
export declare const triggerScript: (hass: HomeAssistant, scriptId: string, variables?: Record<string, unknown>) => Promise<import("../types").ServiceCallResponse<any>>;
export declare const canRun: (state: ScriptEntity) => boolean;
export declare const deleteScript: (hass: HomeAssistant, objectId: string) => Promise<unknown>;
export declare const fetchScriptFileConfig: (hass: HomeAssistant, objectId: string) => Promise<ScriptConfig>;
export declare const getScriptStateConfig: (hass: HomeAssistant, entity_id: string) => Promise<{
    config: ScriptConfig;
}>;
export declare const showScriptEditor: (data?: Partial<ScriptConfig>, expanded?: boolean) => void;
export declare const getScriptEditorInitData: () => Partial<ScriptConfig>;
export declare const getActionType: (action: Action) => ActionType;
export declare const isAction: (value: unknown) => value is Action;
export declare const hasScriptFields: (hass: HomeAssistant, entityId: string) => boolean;
export declare const hasRequiredScriptFields: (hass: HomeAssistant, entityId: string) => boolean;
export declare const requiredScriptFieldsFilled: (hass: HomeAssistant, entityId: string, data?: Record<string, any>) => boolean;
export declare const migrateAutomationAction: (action: Action | Action[]) => Action | Action[];
export declare const normalizeScriptConfig: (config: ScriptConfig) => ScriptConfig;
