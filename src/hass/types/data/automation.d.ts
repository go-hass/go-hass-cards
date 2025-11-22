import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { LocalizeKeys } from "../common/translations/localize";
import type { Context, HomeAssistant } from "../types";
import type { BlueprintInput } from "./blueprint";
import type { DeviceCondition, DeviceTrigger } from "./device_automation";
import type { Action, Field, MODES } from "./script";
export declare const AUTOMATION_DEFAULT_MODE: (typeof MODES)[number];
export declare const AUTOMATION_DEFAULT_MAX = 10;
export interface AutomationEntity extends HassEntityBase {
    attributes: HassEntityAttributeBase & {
        id?: string;
        last_triggered: string;
    };
}
export type AutomationConfig = ManualAutomationConfig | BlueprintAutomationConfig;
export interface ManualAutomationConfig {
    id?: string;
    alias?: string;
    description?: string;
    triggers: Trigger | Trigger[];
    /** @deprecated Use `triggers` instead */
    trigger?: Trigger | Trigger[];
    conditions?: Condition | Condition[];
    /** @deprecated Use `conditions` instead */
    condition?: Condition | Condition[];
    actions: Action | Action[];
    /** @deprecated Use `actions` instead */
    action?: Action | Action[];
    mode?: (typeof MODES)[number];
    max?: number;
    max_exceeded?: "silent" | "critical" | "fatal" | "error" | "warning" | "warn" | "info" | "debug" | "notset";
    variables?: Record<string, unknown>;
}
export interface BlueprintAutomationConfig extends ManualAutomationConfig {
    use_blueprint: {
        path: string;
        input?: BlueprintInput;
    };
}
export interface ForDict {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
}
export interface ContextConstraint {
    context_id?: string;
    parent_id?: string;
    user_id?: string | string[];
}
export interface TriggerList {
    triggers: Trigger | Trigger[] | undefined;
}
export interface BaseTrigger {
    alias?: string;
    /** @deprecated Use `trigger` instead */
    platform?: string;
    trigger: string;
    id?: string;
    variables?: Record<string, unknown>;
    enabled?: boolean;
}
export interface StateTrigger extends BaseTrigger {
    trigger: "state";
    entity_id: string | string[];
    attribute?: string;
    from?: string | string[];
    to?: string | string[];
    for?: string | number | ForDict;
}
export interface MqttTrigger extends BaseTrigger {
    trigger: "mqtt";
    topic: string;
    payload?: string;
}
export interface GeoLocationTrigger extends BaseTrigger {
    trigger: "geo_location";
    source: string;
    zone: string;
    event: "enter" | "leave";
}
export interface HassTrigger extends BaseTrigger {
    trigger: "homeassistant";
    event: "start" | "shutdown";
}
export interface NumericStateTrigger extends BaseTrigger {
    trigger: "numeric_state";
    entity_id: string | string[];
    attribute?: string;
    above?: number;
    below?: number;
    value_template?: string;
    for?: string | number | ForDict;
}
export interface ConversationTrigger extends BaseTrigger {
    trigger: "conversation";
    command: string | string[];
}
export interface SunTrigger extends BaseTrigger {
    trigger: "sun";
    offset: number;
    event: "sunrise" | "sunset";
}
export interface TimePatternTrigger extends BaseTrigger {
    trigger: "time_pattern";
    hours?: number | string;
    minutes?: number | string;
    seconds?: number | string;
}
export interface WebhookTrigger extends BaseTrigger {
    trigger: "webhook";
    webhook_id: string;
    allowed_methods?: string[];
    local_only?: boolean;
}
export interface PersistentNotificationTrigger extends BaseTrigger {
    trigger: "persistent_notification";
    notification_id?: string;
    update_type?: string[];
}
export interface ZoneTrigger extends BaseTrigger {
    trigger: "zone";
    entity_id: string;
    zone: string;
    event: "enter" | "leave";
}
export interface TagTrigger extends BaseTrigger {
    trigger: "tag";
    tag_id: string;
    device_id?: string;
}
export interface TimeTrigger extends BaseTrigger {
    trigger: "time";
    at: string | {
        entity_id: string;
        offset?: string;
    };
    weekday?: string | string[];
}
export interface TemplateTrigger extends BaseTrigger {
    trigger: "template";
    value_template: string;
    for?: string | number | ForDict;
}
export interface EventTrigger extends BaseTrigger {
    trigger: "event";
    event_type: string;
    event_data?: any;
    context?: ContextConstraint;
}
export interface CalendarTrigger extends BaseTrigger {
    trigger: "calendar";
    event: "start" | "end";
    entity_id: string;
    offset: string;
}
export type Trigger = StateTrigger | MqttTrigger | GeoLocationTrigger | HassTrigger | NumericStateTrigger | SunTrigger | ConversationTrigger | TimePatternTrigger | WebhookTrigger | PersistentNotificationTrigger | ZoneTrigger | TagTrigger | TimeTrigger | TemplateTrigger | EventTrigger | DeviceTrigger | CalendarTrigger | TriggerList;
interface BaseCondition {
    condition: string;
    alias?: string;
    enabled?: boolean;
}
export interface LogicalCondition extends BaseCondition {
    condition: "and" | "not" | "or";
    conditions: Condition | Condition[];
}
export interface StateCondition extends BaseCondition {
    condition: "state";
    entity_id: string;
    attribute?: string;
    state: string | number | string[];
    for?: string | number | ForDict;
    match?: "all" | "any";
}
export interface NumericStateCondition extends BaseCondition {
    condition: "numeric_state";
    entity_id: string;
    attribute?: string;
    above?: string | number;
    below?: string | number;
    value_template?: string;
}
export interface SunCondition extends BaseCondition {
    condition: "sun";
    after_offset?: number;
    before_offset?: number;
    after?: "sunrise" | "sunset";
    before?: "sunrise" | "sunset";
}
export interface ZoneCondition extends BaseCondition {
    condition: "zone";
    entity_id: string;
    zone: string;
}
type Weekday = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
export interface TimeCondition extends BaseCondition {
    condition: "time";
    after?: string;
    before?: string;
    weekday?: Weekday | Weekday[];
}
export interface TemplateCondition extends BaseCondition {
    condition: "template";
    value_template: string;
}
export interface TriggerCondition extends BaseCondition {
    condition: "trigger";
    id: string;
}
type ShorthandBaseCondition = Omit<BaseCondition, "condition">;
export interface ShorthandAndConditionList extends ShorthandBaseCondition {
    condition: Condition[];
}
export interface ShorthandAndCondition extends ShorthandBaseCondition {
    and: Condition[];
}
export interface ShorthandOrCondition extends ShorthandBaseCondition {
    or: Condition[];
}
export interface ShorthandNotCondition extends ShorthandBaseCondition {
    not: Condition[];
}
export interface AutomationElementGroupCollection {
    titleKey?: LocalizeKeys;
    groups: AutomationElementGroup;
}
export type AutomationElementGroup = Record<string, {
    icon?: string;
    members?: AutomationElementGroup;
}>;
export type Condition = StateCondition | NumericStateCondition | SunCondition | ZoneCondition | TimeCondition | TemplateCondition | DeviceCondition | LogicalCondition | TriggerCondition;
export type ConditionWithShorthand = Condition | ShorthandAndConditionList | ShorthandAndCondition | ShorthandOrCondition | ShorthandNotCondition;
export declare const expandConditionWithShorthand: (cond: ConditionWithShorthand) => Condition;
export declare const triggerAutomationActions: (hass: HomeAssistant, entityId: string) => void;
export declare const deleteAutomation: (hass: HomeAssistant, id: string) => Promise<unknown>;
export declare const fetchAutomationFileConfig: (hass: HomeAssistant, id: string) => Promise<AutomationConfig>;
export declare const getAutomationStateConfig: (hass: HomeAssistant, entity_id: string) => Promise<{
    config: AutomationConfig;
}>;
export declare const saveAutomationConfig: (hass: HomeAssistant, id: string, config: AutomationConfig) => Promise<undefined>;
export declare const normalizeAutomationConfig: <T extends Partial<AutomationConfig> | AutomationConfig>(config: T) => T;
export declare const migrateAutomationConfig: <T extends Partial<AutomationConfig> | AutomationConfig>(config: T) => T;
export declare const migrateAutomationTrigger: (trigger: Trigger | Trigger[]) => Trigger | Trigger[];
export declare const flattenTriggers: (triggers: undefined | Trigger | Trigger[]) => Trigger[];
export declare const showAutomationEditor: (data?: Partial<AutomationConfig>, expanded?: boolean) => void;
export declare const duplicateAutomation: (config: AutomationConfig) => void;
export declare const getAutomationEditorInitData: () => Partial<AutomationConfig>;
export declare const isTrigger: (config: unknown) => boolean;
export declare const isCondition: (config: unknown) => boolean;
export declare const isScriptField: (config: unknown) => boolean;
export declare const subscribeTrigger: (hass: HomeAssistant, onChange: (result: {
    variables: {
        trigger: Record<string, unknown>;
    };
    context: Context;
}) => void, trigger: Trigger | Trigger[], variables?: Record<string, unknown>) => Promise<() => Promise<void>>;
export declare const testCondition: (hass: HomeAssistant, condition: Condition | Condition[], variables?: Record<string, unknown>) => Promise<{
    result: boolean;
}>;
export interface AutomationClipboard {
    trigger?: Trigger;
    condition?: Condition;
    action?: Action;
}
export interface BaseSidebarConfig {
    delete: () => void;
    close: (focus?: boolean) => void;
}
export interface TriggerSidebarConfig extends BaseSidebarConfig {
    save: (value: Trigger) => void;
    rename: () => void;
    disable: () => void;
    duplicate: () => void;
    cut: () => void;
    copy: () => void;
    insertAfter: (value: Trigger | Trigger[]) => boolean;
    toggleYamlMode: () => void;
    config: Trigger;
    yamlMode: boolean;
    uiSupported: boolean;
}
export interface ConditionSidebarConfig extends BaseSidebarConfig {
    save: (value: Condition) => void;
    rename: () => void;
    disable: () => void;
    test: () => void;
    duplicate: () => void;
    cut: () => void;
    copy: () => void;
    insertAfter: (value: Condition | Condition[]) => boolean;
    toggleYamlMode: () => void;
    config: Condition;
    yamlMode: boolean;
    uiSupported: boolean;
}
export interface ActionSidebarConfig extends BaseSidebarConfig {
    save: (value: Action) => void;
    rename: () => void;
    disable: () => void;
    duplicate: () => void;
    cut: () => void;
    copy: () => void;
    insertAfter: (value: Action | Action[]) => boolean;
    run: () => void;
    toggleYamlMode: () => void;
    config: {
        action: Action;
    };
    yamlMode: boolean;
    uiSupported: boolean;
}
export interface OptionSidebarConfig extends BaseSidebarConfig {
    rename: () => void;
    duplicate: () => void;
    defaultOption?: boolean;
}
export interface ScriptFieldSidebarConfig extends BaseSidebarConfig {
    save: (value: Field) => void;
    config: {
        field: Field;
        selector: boolean;
        key: string;
        excludeKeys: string[];
    };
    toggleYamlMode: () => void;
    yamlMode: boolean;
}
export type SidebarConfig = TriggerSidebarConfig | ConditionSidebarConfig | ActionSidebarConfig | OptionSidebarConfig | ScriptFieldSidebarConfig;
export interface ShowAutomationEditorParams {
    data?: Partial<AutomationConfig>;
    expanded?: boolean;
}
export {};
