import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../panels/logbook/ha-logbook";
import type { HomeAssistant } from "../../types";
export declare class MoreInfoLogbook extends LitElement {
    hass: HomeAssistant;
    entityId: string;
    private _showMoreHref;
    private _time;
    private _entityIdAsList;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected willUpdate(changedProps: PropertyValues): void;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-logbook": MoreInfoLogbook;
    }
}
