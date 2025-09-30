import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-state-icon";
import type { AlarmControlPanelEntity } from "../../../data/alarm_control_panel";
import "../../../state-control/alarm_control_panel/ha-state-control-alarm_control_panel-modes";
import type { HomeAssistant } from "../../../types";
import "../components/ha-more-info-state-header";
declare class MoreInfoAlarmControlPanel extends LitElement {
    hass: HomeAssistant;
    stateObj?: AlarmControlPanelEntity;
    private _disarm;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-alarm_control_panel": MoreInfoAlarmControlPanel;
    }
}
export {};
