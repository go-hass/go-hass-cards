import type { HomeAssistant } from "../types";
export interface Calendar {
    entity_id: string;
    name?: string;
    backgroundColor?: string;
}
/** Object used to render a calendar event in fullcalendar. */
export interface CalendarEvent {
    title: string;
    start: string;
    end?: string;
    backgroundColor?: string;
    borderColor?: string;
    calendar: string;
    eventData: CalendarEventData;
    [key: string]: any;
}
/** Data returned from the core APIs. */
export interface CalendarEventData {
    uid?: string;
    recurrence_id?: string;
    summary: string;
    dtstart: string;
    dtend: string;
    rrule?: string;
    description?: string;
}
export interface CalendarEventMutableParams {
    summary: string;
    dtstart: string;
    dtend: string;
    rrule?: string;
    description?: string;
}
export declare enum RecurrenceRange {
    THISEVENT = "",
    THISANDFUTURE = "THISANDFUTURE"
}
export declare const enum CalendarEntityFeature {
    CREATE_EVENT = 1,
    DELETE_EVENT = 2,
    UPDATE_EVENT = 4
}
export declare const fetchCalendarEvents: (hass: HomeAssistant, start: Date, end: Date, calendars: Calendar[]) => Promise<{
    events: CalendarEvent[];
    errors: string[];
}>;
export declare const getCalendars: (hass: HomeAssistant) => Calendar[];
export declare const createCalendarEvent: (hass: HomeAssistant, entityId: string, event: CalendarEventMutableParams) => Promise<undefined>;
export declare const updateCalendarEvent: (hass: HomeAssistant, entityId: string, uid: string, event: CalendarEventMutableParams, recurrence_id?: string, recurrence_range?: RecurrenceRange) => Promise<undefined>;
export declare const deleteCalendarEvent: (hass: HomeAssistant, entityId: string, uid: string, recurrence_id?: string, recurrence_range?: RecurrenceRange) => Promise<undefined>;
