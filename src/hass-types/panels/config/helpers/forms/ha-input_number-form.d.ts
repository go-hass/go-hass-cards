import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-formfield";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-radio";
import "../../../../components/ha-textfield";
import type { InputNumber } from "../../../../data/input_number";
import type { HomeAssistant } from "../../../../types";
declare class HaInputNumberForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    private _item?;
    private _name;
    private _icon;
    private _max?;
    private _min?;
    private _mode?;
    private _step?;
    private _unit_of_measurement?;
    set item(item: InputNumber);
    focus(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _modeChanged;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input_number-form": HaInputNumberForm;
    }
}
export {};
