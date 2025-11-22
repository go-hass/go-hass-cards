import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/chart/state-history-charts";
import "../../components/chart/statistics-chart";
import type { HomeAssistant } from "../../types";
declare global {
    interface HASSDomEvents {
        closed: undefined;
    }
}
export declare class MoreInfoHistory extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    private _stateHistory?;
    private _statistics?;
    private _showMoreHref;
    private _statNames?;
    private _interval?;
    private _subscribed?;
    private _error?;
    private _metadata?;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected willUpdate(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _unsubscribeHistory;
    private _redrawGraph;
    private _setRedrawTimer;
    private _getStatisticsMetaData;
    private _getStateHistory;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-history": MoreInfoHistory;
    }
}
