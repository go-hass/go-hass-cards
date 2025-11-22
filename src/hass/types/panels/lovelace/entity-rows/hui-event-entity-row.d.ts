import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { EntitiesCardEntityConfig } from "../cards/types";
import "../components/hui-generic-entity-row";
import "../components/hui-timestamp-display";
import type { TimestampRenderingFormat } from "../components/types";
import type { LovelaceRow } from "./types";
interface EventEntityConfig extends EntitiesCardEntityConfig {
    format?: TimestampRenderingFormat;
}
declare class HuiEventEntityRow extends LitElement implements LovelaceRow {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EventEntityConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-event-entity-row": HuiEventEntityRow;
    }
}
export {};
