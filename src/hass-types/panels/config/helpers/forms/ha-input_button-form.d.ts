import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-textfield";
import type { InputButton } from "../../../../data/input_button";
import type { HomeAssistant } from "../../../../types";
declare class HaInputButtonForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    private _name;
    private _icon;
    private _item?;
    set item(item: InputButton);
    focus(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input_button-form": HaInputButtonForm;
    }
}
export {};
