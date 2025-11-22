import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-textfield";
import type { Schedule } from "../../../../data/schedule";
import type { HomeAssistant } from "../../../../types";
declare class HaScheduleForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    disabled: boolean;
    private _name;
    private _icon;
    private _monday;
    private _tuesday;
    private _wednesday;
    private _thursday;
    private _friday;
    private _saturday;
    private _sunday;
    private calendar?;
    private _item?;
    set item(item: Schedule);
    disconnectedCallback(): void;
    connectedCallback(): void;
    focus(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    willUpdate(changedProps: PropertyValues): void;
    protected firstUpdated(): void;
    private _setupCalendar;
    private get _events();
    private _handleSelect;
    private _handleEventResize;
    private _handleEventDrop;
    private _handleEventClick;
    private _updateBlock;
    private _deleteBlock;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-schedule-form": HaScheduleForm;
    }
}
export {};
