import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-spinner";
import "../../../components/ha-dialog";
import "../../../components/ha-button";
import "../../../components/ha-form/ha-form";
import "../../../components/ha-icon-next";
import "../../../components/ha-list-item";
import "../../../components/ha-selector/ha-selector-datetime";
import "../../../components/ha-selector/ha-selector-number";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { DialogStatisticsAdjustSumParams } from "./show-dialog-statistics-adjust-sum";
export declare class DialogStatisticsFixUnsupportedUnitMetadata extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _busy;
    private _moment?;
    private _stats5min?;
    private _statsHour?;
    private _chosenStat?;
    private _origAmount?;
    private _amount?;
    private _dateTimeSelector;
    private _amountSelector;
    showDialog(params: DialogStatisticsAdjustSumParams): void;
    closeDialog(): void;
    protected render(): TemplateResult<1> | typeof nothing;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    private _renderPickStatistic;
    private _clearChosenStatistic;
    private _setChosenStatistic;
    private _dateTimeSelectorChanged;
    private _renderAdjustStat;
    private _amountChanged;
    private _fetchStats;
    private _fetchOutliers;
    private _fixIssue;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-statistics-adjust-sum": DialogStatisticsFixUnsupportedUnitMetadata;
    }
}
