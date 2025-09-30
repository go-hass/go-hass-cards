import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-checkbox";
import "../../../../components/ha-dialog";
import "../../../../components/ha-formfield";
import "../../../../components/ha-button";
import "../../../../components/ha-radio";
import "../../../../components/ha-svg-icon";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { EnergySettingsSolarDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergySolarSettings extends LitElement implements HassDialog<EnergySettingsSolarDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _source?;
    private _configEntries?;
    private _forecast?;
    private _energy_units?;
    private _error?;
    private _excludeList?;
    showDialog(params: EnergySettingsSolarDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _fetchSolarForecastConfigEntries;
    private _handleForecastChanged;
    private _forecastCheckChanged;
    private _addForecast;
    private _statisticChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-solar-settings": DialogEnergySolarSettings;
    }
}
