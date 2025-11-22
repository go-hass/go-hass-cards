import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import type { HomeAssistant } from "../../../types";
import "../../calendar/ha-full-calendar";
import "../components/hui-warning";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { CalendarCardConfig } from "./types";
export declare class HuiCalendarCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFill: string[]): {
        entities: string[];
    };
    hass?: HomeAssistant;
    layout?: string;
    private _events;
    private _config?;
    private _calendars;
    private _eventDisplay;
    private _narrow;
    private _error?;
    private _startDate?;
    private _endDate?;
    private _resizeObserver?;
    setConfig(config: CalendarCardConfig): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected updated(changedProps: PropertyValues): void;
    private _handleViewChanged;
    private _fetchCalendarEvents;
    private _measureCard;
    private _attachObserver;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-calendar-card": HuiCalendarCard;
    }
}
