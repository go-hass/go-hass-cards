import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-formfield";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-radio";
import "../../../../components/ha-textfield";
import type { InputDateTime } from "../../../../data/input_datetime";
import type { HomeAssistant } from "../../../../types";
declare class HaInputDateTimeForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    disabled: boolean;
    private _item?;
    private _name;
    private _icon;
    private _mode;
    set item(item: InputDateTime);
    focus(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _modeChanged;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input_datetime-form": HaInputDateTimeForm;
    }
}
export {};
