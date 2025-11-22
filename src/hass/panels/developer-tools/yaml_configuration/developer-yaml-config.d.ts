import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/buttons/ha-call-service-button";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-spinner";
import type { HomeAssistant, Route } from "../../../types";
export declare class DeveloperYamlConfig extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    showAdvanced: boolean;
    private _validating;
    private _reloadableDomains;
    private _validateResult?;
    disconnectedCallback(): void;
    protected updated(changedProperties: any): void;
    protected render(): TemplateResult;
    private _validateConfig;
    private _restart;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "developer-yaml-config": DeveloperYamlConfig;
    }
}
