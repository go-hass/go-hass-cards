import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-spinner";
import type { HomeAssistant } from "../../types";
import "./ha-logbook-renderer";
export declare class HaLogbook extends LitElement {
    hass: HomeAssistant;
    time: {
        range: [Date, Date];
    } | {
        recent: number;
    };
    entityIds?: string[];
    deviceIds?: string[];
    narrow: boolean;
    virtualize: boolean;
    noIcon: boolean;
    noName: boolean;
    showIndicator: boolean;
    relativeTime: boolean;
    showMoreLink: boolean;
    private _logbookEntries?;
    private _traceContexts;
    private _userIdToName;
    private _error?;
    private _unsubLogbook?;
    private _liveUpdatesEnabled;
    private _pendingStreamMessages;
    private _throttleGetLogbookEntries;
    private _logbookSubscriptionId;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    refresh(force?: boolean): Promise<void>;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected willUpdate(changedProps: PropertyValues): void;
    private _handleLogbookLive;
    private get _filterAlwaysEmptyResults();
    /**
     * Unsubscribe from a logbook stream since
     * - we are unloading the page
     * - we are about to resubscribe
     * - the entity is not being tracked in the logbook
     *   and will not return results ever
     * - the requested start time is in the future
     *
     * In cases where no events are expected, we set this._logbookEntries
     * to an empty list to show a no results message.
     *
     * @param loading Indicates if the page should be put in a loading state again.
     */
    private _unsubscribe;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _calculateLogbookPeriod;
    private _subscribeLogbookPeriod;
    private _getLogBookData;
    private _nonExpiredRecords;
    private _processOrQueueStreamMessage;
    private _processStreamMessage;
    private _updateTraceContexts;
    private _updateUsers;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-logbook": HaLogbook;
    }
}
