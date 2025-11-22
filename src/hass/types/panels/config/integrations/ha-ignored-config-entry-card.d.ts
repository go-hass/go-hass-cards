import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { IntegrationManifest } from "../../../data/integration";
import type { HomeAssistant } from "../../../types";
import type { ConfigEntryExtended } from "./ha-config-integrations";
import "./ha-integration-action-card";
import "../../../components/ha-button";
export declare class HaIgnoredConfigEntryCard extends LitElement {
    hass: HomeAssistant;
    entry: ConfigEntryExtended;
    manifest?: IntegrationManifest;
    protected render(): TemplateResult;
    private _removeIgnoredIntegration;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-ignored-config-entry-card": HaIgnoredConfigEntryCard;
    }
}
