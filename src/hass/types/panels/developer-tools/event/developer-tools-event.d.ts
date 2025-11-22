import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-yaml-editor";
import "../../../components/ha-textfield";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "./event-subscribe-card";
import "./events-list";
import type { HomeAssistant } from "../../../types";
declare class HaPanelDevEvent extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _eventType;
    private _eventData;
    private _isValid;
    protected render(): TemplateResult;
    private _eventSelected;
    private _eventTypeChanged;
    private _yamlChanged;
    private _fireEvent;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "developer-tools-event": HaPanelDevEvent;
    }
}
export {};
