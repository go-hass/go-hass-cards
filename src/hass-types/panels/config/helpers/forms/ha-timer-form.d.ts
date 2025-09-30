import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-checkbox";
import "../../../../components/ha-formfield";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-duration-input";
import "../../../../components/ha-textfield";
import type { Timer } from "../../../../data/timer";
import type { HomeAssistant } from "../../../../types";
declare class HaTimerForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    private _item?;
    private _name;
    private _icon;
    private _duration;
    private _duration_data;
    private _restore;
    set item(item: Timer);
    focus(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    private _toggleRestore;
    private _setDurationData;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-timer-form": HaTimerForm;
    }
}
export {};
