import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-card";
import "../../../../../components/ha-list-item";
import "../../../../../components/ha-select";
import "../../../../../components/ha-selector/ha-selector-boolean";
import "../../../../../components/ha-settings-row";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/ha-textfield";
import "../../../../../components/ha-combo-box";
import "../../../../../layouts/hass-error-screen";
import "../../../../../layouts/hass-loading-screen";
import "../../../../../layouts/hass-tabs-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
import "../../../ha-config-section";
import "./zwave_js-custom-param";
declare class ZWaveJSNodeConfig extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    configEntryId?: string;
    deviceId: string;
    private _nodeMetadata?;
    private _config?;
    private _canResetAll;
    private _results;
    private _error?;
    private _resetDialogProgress;
    connectedCallback(): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _generateConfigBox;
    private _isEnumeratedBool;
    private _handleNewValue;
    private _switchToggled;
    private _dropdownSelected;
    private _numericInputChanged;
    private _getComboBoxOptions;
    private _getComboBoxValueChangedCallback;
    private _updateConfigParameter;
    private _setResult;
    private _setError;
    private _fetchData;
    private _openResetDialog;
    private _resetAllConfigParameters;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-node-config": ZWaveJSNodeConfig;
    }
}
export {};
