import { LitElement } from "lit";
import "../../../components/ha-icon-button";
import type { HomeAssistant } from "../../../types";
import "../../../components/ha-md-list-item";
import "../../../components/ha-md-button-menu";
export declare class HaIntegrationOverflowMenu extends LitElement {
    hass: HomeAssistant;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-integration-overflow-menu": HaIntegrationOverflowMenu;
    }
}
