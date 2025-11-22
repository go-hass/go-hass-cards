import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-textfield";
import type { RepeatAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import "../ha-automation-action";
import type { ActionElement } from "../ha-automation-action-row";
import "../../../../../components/ha-form/ha-form";
export declare const getRepeatType: (action: RepeatAction["repeat"]) => "count" | "while" | "until" | "for_each";
export declare class HaRepeatAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    narrow: boolean;
    action: RepeatAction;
    inSidebar: boolean;
    indent: boolean;
    private _formElement?;
    static get defaultConfig(): RepeatAction;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): CSSResultGroup;
    private _getSelectorElements;
    expandAll(): void;
    collapseAll(): void;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-repeat": HaRepeatAction;
    }
}
