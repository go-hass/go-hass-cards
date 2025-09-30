import { LitElement } from "lit";
import "../../../../../components/ha-list-item";
import "../../../../../components/ha-select";
import type { Condition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import "../../condition/ha-automation-condition-editor";
import "../../condition/types/ha-automation-condition-and";
import "../../condition/types/ha-automation-condition-device";
import "../../condition/types/ha-automation-condition-not";
import "../../condition/types/ha-automation-condition-numeric_state";
import "../../condition/types/ha-automation-condition-or";
import "../../condition/types/ha-automation-condition-state";
import "../../condition/types/ha-automation-condition-sun";
import "../../condition/types/ha-automation-condition-template";
import "../../condition/types/ha-automation-condition-time";
import "../../condition/types/ha-automation-condition-trigger";
import "../../condition/types/ha-automation-condition-zone";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaConditionAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: Condition;
    narrow: boolean;
    inSidebar: boolean;
    indent: boolean;
    private _conditionEditor?;
    static get defaultConfig(): Omit<Condition, "state" | "entity_id">;
    protected render(): import("lit-html").TemplateResult<1>;
    private _processedTypes;
    private _conditionChanged;
    private _typeChanged;
    private _uiSupported;
    expandAll(): void;
    collapseAll(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-condition": HaConditionAction;
    }
}
