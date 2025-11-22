import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-button";
import "../../components/ha-button-toggle-group";
import "../../components/ha-fab";
import "../../components/ha-icon-button-next";
import "../../components/ha-icon-button-prev";
import type { Calendar as CalendarData, CalendarEvent } from "../../data/calendar";
import type { CalendarViewChanged, FullCalendarView, HomeAssistant } from "../../types";
import "../lovelace/components/hui-warning";
declare global {
    interface HTMLElementTagNameMap {
        "ha-full-calendar": HAFullCalendar;
    }
    interface HASSDomEvents {
        "view-changed": CalendarViewChanged;
    }
}
export declare class HAFullCalendar extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    events: CalendarEvent[];
    calendars: CalendarData[];
    views: FullCalendarView[];
    initialView: FullCalendarView;
    eventDisplay: string;
    error?: string;
    private calendar?;
    private _viewButtons?;
    private _activeView;
    private _resizeController;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    willUpdate(changedProps: PropertyValues): void;
    protected firstUpdated(): void;
    private _loadCalendar;
    private get _hasMutableCalendars();
    private _createEvent;
    private _handleEventClick;
    private _handleDateClick;
    private _handleNext;
    private _handlePrev;
    private _handleToday;
    private _handleView;
    private _fireViewChanged;
    private _viewToggleButtons;
    static get styles(): CSSResultGroup;
}
