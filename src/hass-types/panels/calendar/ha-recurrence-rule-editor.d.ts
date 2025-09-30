import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/chips/ha-chip-set";
import "../../components/chips/ha-filter-chip";
import "../../components/ha-date-input";
import "../../components/ha-list-item";
import "../../components/ha-select";
import "../../components/ha-textfield";
import type { HomeAssistant } from "../../types";
export declare class RecurrenceRuleEditor extends LitElement {
    hass: HomeAssistant;
    disabled: boolean;
    value: string;
    dtstart?: Date;
    allDay: boolean;
    locale: HomeAssistant["locale"];
    timezone?: string;
    private _computedRRule;
    private _freq?;
    private _interval;
    private _weekday;
    private _monthlyRepeat?;
    private _monthlyRepeatWeekday?;
    private _monthday?;
    private _end;
    private _count?;
    private _untilDay?;
    private _monthlyRepeatSelect;
    private _allWeekdays?;
    private _monthlyRepeatItems;
    protected willUpdate(changedProps: PropertyValues): void;
    renderRepeat(): import("lit-html").TemplateResult<1>;
    renderMonthly(): import("lit-html").TemplateResult<1>;
    renderWeekly(): import("lit-html").TemplateResult<1>;
    renderDaily(): import("lit-html").TemplateResult<1>;
    renderInterval(): import("lit-html").TemplateResult<1>;
    renderEnd(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
    private _onIntervalChange;
    private _onRepeatSelected;
    private _onMonthlyDetailSelected;
    private _onWeekdayToggle;
    private _onEndSelected;
    private _onCountChange;
    private _onUntilChange;
    private _computeWeekday;
    private _computeRRule;
    private _updateRule;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-recurrence-rule-editor": RecurrenceRuleEditor;
    }
}
