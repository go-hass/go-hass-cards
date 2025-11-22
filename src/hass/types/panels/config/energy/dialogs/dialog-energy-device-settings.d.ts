import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-entity-picker";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-dialog";
import "../../../../components/ha-radio";
import "../../../../components/ha-button";
import "../../../../components/ha-select";
import "../../../../components/ha-list-item";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { EnergySettingsDeviceDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergyDeviceSettings extends LitElement implements HassDialog<EnergySettingsDeviceDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _device?;
    private _energy_units?;
    private _error?;
    private _excludeList?;
    private _possibleParents;
    showDialog(params: EnergySettingsDeviceDialogParams): Promise<void>;
    private _computePossibleParents;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _statisticChanged;
    private _nameChanged;
    private _parentSelected;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-device-settings": DialogEnergyDeviceSettings;
    }
}
