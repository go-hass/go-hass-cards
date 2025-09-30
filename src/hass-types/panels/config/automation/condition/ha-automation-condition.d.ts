import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-button-menu";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import type { AutomationClipboard, Condition } from "../../../../data/automation";
import type { HomeAssistant } from "../../../../types";
import "./ha-automation-condition-row";
export default class HaAutomationCondition extends LitElement {
    hass: HomeAssistant;
    conditions: Condition[];
    highlightedConditions?: Condition[];
    disabled: boolean;
    narrow: boolean;
    root: boolean;
    optionsInSidebar: boolean;
    private _rowSortSelected?;
    _clipboard?: AutomationClipboard;
    private _conditionRowElements?;
    private _focusLastConditionOnChange;
    private _focusConditionIndexOnChange?;
    private _conditionKeys;
    protected updated(changedProperties: PropertyValues): void;
    expandAll(): void;
    collapseAll(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _addConditionDialog;
    private _addConditionBuildingBlockDialog;
    private _addCondition;
    private _getKey;
    private _moveUp;
    private _moveDown;
    private _move;
    private _conditionMoved;
    private _conditionAdded;
    private _conditionRemoved;
    private _conditionChanged;
    private _duplicateCondition;
    private _insertAfter;
    private _handleDragKeydown;
    private _stopSortSelection;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition": HaAutomationCondition;
    }
}
