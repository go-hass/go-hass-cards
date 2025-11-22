import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import type { ZHADeviceEndpoint } from "../../../../../data/zha";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../../types";
import "../../../ha-config-section";
import "../../../../../components/ha-textfield";
import "./zha-device-endpoint-data-table";
export declare class ZHAAddGroupPage extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    deviceEndpoints: ZHADeviceEndpoint[];
    private _processingAdd;
    private _groupName;
    private _groupId?;
    private _zhaDevicesDataTable;
    private _firstUpdatedCalled;
    private _selectedDevicesToAdd;
    connectedCallback(): void;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _fetchData;
    private _handleAddSelectionChanged;
    private _createGroup;
    private _handleGroupIdChange;
    private _handleNameChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-add-group-page": ZHAAddGroupPage;
    }
}
