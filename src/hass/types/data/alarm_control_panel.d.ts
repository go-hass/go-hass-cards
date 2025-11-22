import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export declare const FORMAT_TEXT = "text";
export declare const FORMAT_NUMBER = "number";
export declare const enum AlarmControlPanelEntityFeature {
    ARM_HOME = 1,
    ARM_AWAY = 2,
    ARM_NIGHT = 4,
    TRIGGER = 8,
    ARM_CUSTOM_BYPASS = 16,
    ARM_VACATION = 32
}
interface AlarmControlPanelEntityAttributes extends HassEntityAttributeBase {
    code_format?: "text" | "number";
    changed_by?: string | null;
    code_arm_required?: boolean;
}
export interface AlarmControlPanelEntity extends HassEntityBase {
    attributes: AlarmControlPanelEntityAttributes;
}
export declare const callAlarmAction: (hass: HomeAssistant, entity: string, action: "arm_away" | "arm_home" | "arm_night" | "arm_vacation" | "arm_custom_bypass" | "disarm", code?: string) => void;
export type AlarmMode = "armed_home" | "armed_away" | "armed_night" | "armed_vacation" | "armed_custom_bypass" | "disarmed";
interface AlarmConfig {
    service: string;
    feature?: AlarmControlPanelEntityFeature;
    path: string;
}
export declare const ALARM_MODES: Record<AlarmMode, AlarmConfig>;
export declare const supportedAlarmModes: (stateObj: AlarmControlPanelEntity) => AlarmMode[];
export declare const setProtectedAlarmControlPanelMode: (element: HTMLElement, hass: HomeAssistant, stateObj: AlarmControlPanelEntity, mode: AlarmMode) => Promise<void>;
export {};
