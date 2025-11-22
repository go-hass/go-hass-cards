import { type CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-button-menu";
import "../../../components/ha-card";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-formfield";
import "../../../components/ha-icon-button";
import "../../../components/ha-list";
import "../../../components/ha-list-item";
import "../../../components/ha-password-field";
import "../../../components/ha-radio";
import "../../../components/ha-spinner";
import "../../../components/ha-tab-group";
import "../../../components/ha-tab-group-tab";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
export declare class HassioNetwork extends LitElement {
    hass: HomeAssistant;
    private _accessPoints;
    private _curTabIndex;
    private _dirty;
    private _interface?;
    private _interfaces;
    private _processing;
    private _scanning;
    private _wifiConfiguration?;
    private _dnsMenuOpen;
    protected firstUpdated(): void;
    private _fetchNetworkInfo;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _renderTab;
    private _selectAP;
    private _scanForAP;
    private _renderIPConfiguration;
    private _updateNetwork;
    private _clear;
    private _handleTabActivated;
    private _handleRadioValueChanged;
    private _handleRadioValueChangedAp;
    private _handleInputValueChanged;
    private _handleInputValueChangedWifi;
    private _addAddress;
    private _removeAddress;
    private _handleDNSMenuOpened;
    private _handleDNSMenuClosed;
    private _addPredefinedDNS;
    private _addCustomDNS;
    private _removeNameserver;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-network": HassioNetwork;
    }
}
