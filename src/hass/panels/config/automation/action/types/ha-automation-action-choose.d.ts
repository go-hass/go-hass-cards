import { type CSSResultGroup, LitElement } from "lit";
import type { ChooseAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import "../../option/ha-automation-option";
import "../../option/ha-automation-option-row";
import "../ha-automation-action";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaChooseAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: ChooseAction;
    narrow: boolean;
    indent: boolean;
    private _showDefault;
    private _optionElement?;
    private _defaultOptionRowElement?;
    static get defaultConfig(): ChooseAction;
    protected render(): import("lit-html").TemplateResult<1>;
    private _addDefault;
    private _optionsChanged;
    private _defaultChanged;
    expandAll(): void;
    collapseAll(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-choose": HaChooseAction;
    }
}
