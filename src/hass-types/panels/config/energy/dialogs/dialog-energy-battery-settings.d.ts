import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-dialog";
import "../../../../components/ha-button";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { EnergySettingsBatteryDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergyBatterySettings extends LitElement implements HassDialog<EnergySettingsBatteryDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _source?;
    private _energy_units?;
    private _error?;
    private _excludeList?;
    showDialog(params: EnergySettingsBatteryDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _statisticToChanged;
    private _statisticFromChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-battery-settings": DialogEnergyBatterySettings;
    }
}
