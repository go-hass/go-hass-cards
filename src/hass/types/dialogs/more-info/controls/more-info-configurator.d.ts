import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-markdown";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
export declare class MoreInfoConfigurator extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    private _isConfiguring;
    private _fieldInput;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _fieldChanged;
    private _submitClicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-configurator": MoreInfoConfigurator;
    }
}
