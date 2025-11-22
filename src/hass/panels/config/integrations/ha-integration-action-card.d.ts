import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import { type IntegrationManifest } from "../../../data/integration";
import type { HomeAssistant } from "../../../types";
import "./ha-integration-header";
import "../../../components/ha-card";
export declare class HaIntegrationActionCard extends LitElement {
    hass: HomeAssistant;
    banner: string;
    localizedDomainName?: string;
    domain: string;
    label: string;
    manifest?: IntegrationManifest;
    protected render(): TemplateResult;
    private _onImageLoad;
    private _onImageError;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-integration-action-card": HaIntegrationActionCard;
    }
}
