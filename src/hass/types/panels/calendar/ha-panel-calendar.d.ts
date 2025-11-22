import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-button";
import "../../components/ha-button-menu";
import "../../components/ha-card";
import "../../components/ha-check-list-item";
import "../../components/ha-icon-button";
import "../../components/ha-list";
import "../../components/ha-list-item";
import "../../components/ha-menu-button";
import "../../components/ha-state-icon";
import "../../components/ha-svg-icon";
import "../../components/ha-two-pane-top-app-bar-fixed";
import type { HomeAssistant } from "../../types";
import "./ha-full-calendar";
declare class PanelCalendar extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    mobile: boolean;
    private _calendars;
    private _events;
    private _error?;
    private _deSelectedCalendars;
    private _start?;
    private _end?;
    private _showPaneController;
    private _mql?;
    private _headerHeight;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _setIsMobile;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private get _selectedCalendars();
    private _fetchEvents;
    private _requestSelected;
    private _addCalendar;
    private _handleViewChanged;
    private _handleRefresh;
    private _handleErrors;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-calendar": PanelCalendar;
    }
}
export {};
