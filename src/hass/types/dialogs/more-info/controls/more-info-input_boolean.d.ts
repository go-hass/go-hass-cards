import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attributes";
import "../../../state-control/ha-state-control-toggle";
import type { HomeAssistant } from "../../../types";
import "../components/ha-more-info-state-header";
declare class MoreInfoInputBoolean extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-input_boolean": MoreInfoInputBoolean;
    }
}
export {};
