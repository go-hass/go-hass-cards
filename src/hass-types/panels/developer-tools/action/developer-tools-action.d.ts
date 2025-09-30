import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/entity/ha-entity-picker";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/buttons/ha-progress-button";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-icon-button";
import "../../../components/ha-service-control";
import "../../../components/ha-service-picker";
import "../../../components/ha-yaml-editor";
import type { HomeAssistant } from "../../../types";
declare class HaPanelDevAction extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _uiAvailable;
    private _response?;
    private _error?;
    private _yamlValid;
    private _serviceData?;
    private _yamlMode;
    private _yamlEditor?;
    protected willUpdate(): void;
    protected firstUpdated(params: any): void;
    protected render(): TemplateResult<1>;
    private _copyTemplate;
    private _filterSelectorFields;
    private _validateServiceData;
    private _fields;
    private _callService;
    private _toggleYaml;
    private _yamlChanged;
    private _checkUiSupported;
    private _serviceDataChanged;
    private _serviceChanged;
    private _fillExampleData;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "developer-tools-action": HaPanelDevAction;
    }
}
export {};
