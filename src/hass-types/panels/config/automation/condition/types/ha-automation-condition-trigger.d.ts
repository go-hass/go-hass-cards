import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import "../../../../../components/ha-select";
import { type TriggerCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export declare class HaTriggerCondition extends LitElement {
    hass: HomeAssistant;
    condition: TriggerCondition;
    disabled: boolean;
    private _triggerIds;
    private _unsub?;
    static get defaultConfig(): TriggerCondition;
    private _schema;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): string | import("lit-html").TemplateResult<1>;
    private _computeLabelCallback;
    private _automationUpdated;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-trigger": HaTriggerCondition;
    }
}
