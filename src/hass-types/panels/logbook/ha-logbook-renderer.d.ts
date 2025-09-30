import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/entity/state-badge";
import "../../components/ha-icon-next";
import "../../components/ha-relative-time";
import type { LogbookEntry } from "../../data/logbook";
import type { TraceContexts } from "../../data/trace";
import type { HomeAssistant } from "../../types";
declare global {
    interface HASSDomEvents {
        "hass-logbook-live": {
            enable: boolean;
        };
    }
}
declare class HaLogbookRenderer extends LitElement {
    hass: HomeAssistant;
    userIdToName: {};
    traceContexts: TraceContexts;
    entries: LogbookEntry[];
    narrow: boolean;
    virtualize: boolean;
    showIndicator: boolean;
    noIcon: boolean;
    noName: boolean;
    relativeTime: boolean;
    private _savedScrollPos?;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected shouldUpdate(changedProps: PropertyValues<this>): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderLogbookItem;
    private _saveScrollPos;
    private _visibilityChanged;
    private _renderIndicator;
    private _renderMessage;
    private _renderUser;
    private _renderUnseenContextSourceEntity;
    private _renderContextMessage;
    private _renderEntity;
    private _formatMessageWithPossibleEntity;
    private _entityClicked;
    private _handleClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-logbook-renderer": HaLogbookRenderer;
    }
}
export {};
