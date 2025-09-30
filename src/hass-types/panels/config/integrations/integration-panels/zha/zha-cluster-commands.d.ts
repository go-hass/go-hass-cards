import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/buttons/ha-call-service-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-form/ha-form";
import "../../../../../components/ha-list-item";
import "../../../../../components/ha-select";
import "../../../../../components/ha-textfield";
import type { Cluster, ZHADevice } from "../../../../../data/zha";
import type { HomeAssistant } from "../../../../../types";
export declare class ZHAClusterCommands extends LitElement {
    hass?: HomeAssistant;
    isWide: boolean;
    device?: ZHADevice;
    selectedCluster?: Cluster;
    private _commands;
    private _selectedCommandId?;
    private _manufacturerCodeOverride?;
    private _issueClusterCommandServiceData?;
    private _canIssueCommand;
    private _commandData;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _fetchCommandsForCluster;
    private _computeIssueClusterCommandServiceData;
    private _commandDataChanged;
    private _onManufacturerCodeOverrideChanged;
    private _selectedCommandChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-cluster-commands": ZHAClusterCommands;
    }
}
