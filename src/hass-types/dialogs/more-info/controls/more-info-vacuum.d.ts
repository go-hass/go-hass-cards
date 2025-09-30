import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-battery-icon";
import "../../../components/ha-attributes";
import "../../../components/ha-icon";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import "../../../components/ha-select";
import type { VacuumEntity } from "../../../data/vacuum";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoVacuum extends LitElement {
    hass: HomeAssistant;
    stateObj?: VacuumEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _deviceEntities;
    private _renderBattery;
    private _callService;
    private _handleFanSpeedChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-vacuum": MoreInfoVacuum;
    }
}
export {};
