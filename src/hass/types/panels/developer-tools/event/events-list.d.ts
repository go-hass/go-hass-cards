import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../../types";
interface EventListenerCount {
    event: string;
    listener_count: number;
}
declare class EventsList extends LitElement {
    hass: HomeAssistant;
    events: EventListenerCount[];
    protected render(): TemplateResult;
    protected firstUpdated(): Promise<void>;
    private _eventSelected;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "events-list": EventsList;
    }
    interface HASSDomEvents {
        "event-selected": {
            eventType: string;
        };
    }
}
export {};
