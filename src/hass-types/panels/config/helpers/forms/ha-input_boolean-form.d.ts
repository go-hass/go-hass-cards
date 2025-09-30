import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-textfield";
import type { InputBoolean } from "../../../../data/input_boolean";
import type { HomeAssistant } from "../../../../types";
declare class HaInputBooleanForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    private _item?;
    private _name;
    private _icon;
    set item(item: InputBoolean);
    focus(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input_boolean-form": HaInputBooleanForm;
    }
}
export {};
