import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/entity/ha-entity-picker";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-dialog";
import "../../../../components/ha-button";
import "../../../../components/ha-formfield";
import "../../../../components/ha-radio";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { EnergySettingsGridFlowDialogParams } from "./show-dialogs-energy";
export declare class DialogEnergyGridFlowSettings extends LitElement implements HassDialog<EnergySettingsGridFlowDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _source?;
    private _costs?;
    private _pickedDisplayUnit?;
    private _energy_units?;
    private _error?;
    private _excludeList?;
    showDialog(params: EnergySettingsGridFlowDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleCostChanged;
    private set _costStat(value);
    private _numberPriceChanged;
    private _priceStatChanged;
    private _priceEntityChanged;
    private _statisticChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-energy-grid-flow-settings": DialogEnergyGridFlowSettings;
    }
}
