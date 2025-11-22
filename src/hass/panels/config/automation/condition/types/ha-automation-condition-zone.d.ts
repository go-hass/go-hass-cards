import { LitElement } from "lit";
import "../../../../../components/entity/ha-entity-picker";
import type { ZoneCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export declare class HaZoneCondition extends LitElement {
    hass: HomeAssistant;
    condition: ZoneCondition;
    disabled: boolean;
    static get defaultConfig(): ZoneCondition;
    protected render(): import("lit-html").TemplateResult<1>;
    private _entityPicked;
    private _zonePicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-zone": HaZoneCondition;
    }
}
