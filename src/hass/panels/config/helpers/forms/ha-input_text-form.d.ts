import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-formfield";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-radio";
import "../../../../components/ha-textfield";
import type { InputText } from "../../../../data/input_text";
import type { HomeAssistant } from "../../../../types";
declare class HaInputTextForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    disabled: boolean;
    private _item?;
    private _name;
    private _icon;
    private _max?;
    private _min?;
    private _mode?;
    private _pattern?;
    set item(item: InputText);
    focus(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _modeChanged;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input_text-form": HaInputTextForm;
    }
}
export {};
