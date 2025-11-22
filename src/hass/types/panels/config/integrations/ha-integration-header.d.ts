import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-icon-next";
import "../../../components/ha-svg-icon";
import type { IntegrationManifest } from "../../../data/integration";
import type { HomeAssistant } from "../../../types";
export declare class HaIntegrationHeader extends LitElement {
    hass: HomeAssistant;
    error?: string;
    warning?: string;
    localizedDomainName?: string;
    domain: string;
    manifest?: IntegrationManifest;
    protected render(): TemplateResult;
    private _onImageLoad;
    private _onImageError;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-integration-header": HaIntegrationHeader;
    }
}
