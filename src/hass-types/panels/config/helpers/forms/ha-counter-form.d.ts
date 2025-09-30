import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-switch";
import "../../../../components/ha-textfield";
import type { Counter } from "../../../../data/counter";
import type { HomeAssistant } from "../../../../types";
declare class HaCounterForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    private _item?;
    private _name;
    private _icon;
    private _maximum?;
    private _minimum?;
    private _restore?;
    private _initial?;
    private _step?;
    set item(item: Counter);
    focus(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-counter-form": HaCounterForm;
    }
}
export {};
