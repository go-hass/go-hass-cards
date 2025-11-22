import type { HomeAssistant } from "../types";
export declare const weekdays: readonly ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
export interface ScheduleDay {
    from: string;
    to: string;
}
type ScheduleDays = Partial<Record<(typeof weekdays)[number], ScheduleDay[]>>;
export interface Schedule extends ScheduleDays {
    id: string;
    name: string;
    icon?: string;
}
export interface ScheduleMutableParams {
    name: string;
    icon: string;
}
export declare const fetchSchedule: (hass: HomeAssistant) => Promise<Schedule[]>;
export declare const createSchedule: (hass: HomeAssistant, values: ScheduleMutableParams) => Promise<Schedule>;
export declare const updateSchedule: (hass: HomeAssistant, id: string, updates: Partial<ScheduleMutableParams>) => Promise<Schedule>;
export declare const deleteSchedule: (hass: HomeAssistant, id: string) => Promise<unknown>;
export declare const getScheduleTime: (date: Date) => string;
export {};
