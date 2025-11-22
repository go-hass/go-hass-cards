import "../../../../../components/entity/ha-entity-picker";
import "../../../../../components/ha-formfield";
import { LitElement } from "lit";
import type { ZoneTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export declare class HaZoneTrigger extends LitElement {
    hass: HomeAssistant;
    trigger: ZoneTrigger;
    disabled: boolean;
    static get defaultConfig(): ZoneTrigger;
    protected render(): import("lit-html").TemplateResult<1>;
    private _entityPicked;
    private _zonePicked;
    private _radioGroupPicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-zone": HaZoneTrigger;
    }
}
