import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-icon-button-prev";
import "../../../components/ha-list";
import "../../../components/ha-spinner";
import "../../../components/search-input";
import type { HomeAssistant } from "../../../types";
import "./ha-domain-integrations";
import "./ha-integration-list-item";
import type { AddIntegrationDialogParams } from "./show-add-integration-dialog";
export interface IntegrationListItem {
    name: string;
    domain: string;
    config_flow?: boolean;
    is_helper?: boolean;
    integrations?: string[];
    domains?: string[];
    iot_standards?: string[];
    supported_by?: string;
    cloud?: boolean;
    is_built_in?: boolean;
    overwrites_built_in?: boolean;
    is_add?: boolean;
    single_config_entry?: boolean;
}
declare class AddIntegrationDialog extends LitElement {
    hass: HomeAssistant;
    private _integrations?;
    private _helpers?;
    private _initialFilter?;
    private _filter?;
    private _pickedBrand?;
    private _prevPickedBrand?;
    private _flowsInProgress?;
    private _open;
    private _narrow;
    private _width?;
    private _height?;
    showDialog(params?: AddIntegrationDialogParams): Promise<void>;
    closeDialog(): void;
    willUpdate(changedProps: PropertyValues): void;
    private _filterIntegrations;
    private _getIntegrations;
    protected render(): TemplateResult<1> | typeof nothing;
    private _calculateBrandHeading;
    private _renderIntegration;
    private _handleSelectBrandEvent;
    private _handleSupportedByEvent;
    private _supportedBy;
    private _renderAll;
    private _keyFunction;
    private _renderRow;
    private _load;
    private _filterChanged;
    private _integrationPicked;
    private _handleKeyPress;
    private _handleIntegrationPicked;
    private _createFlow;
    private _fetchFlowsInProgress;
    private _maybeSubmit;
    private _prevClicked;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-add-integration": AddIntegrationDialog;
    }
}
export {};
