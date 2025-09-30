import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-button-menu";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import type { AutomationClipboard, Trigger } from "../../../../data/automation";
import type { HomeAssistant } from "../../../../types";
import "./ha-automation-trigger-row";
export default class HaAutomationTrigger extends LitElement {
    hass: HomeAssistant;
    triggers: Trigger[];
    highlightedTriggers?: Trigger[];
    disabled: boolean;
    narrow: boolean;
    optionsInSidebar: boolean;
    root: boolean;
    private _rowSortSelected?;
    _clipboard?: AutomationClipboard;
    private _focusLastTriggerOnChange;
    private _focusTriggerIndexOnChange?;
    private _triggerKeys;
    protected render(): import("lit-html").TemplateResult<1>;
    private _addTriggerDialog;
    private _addTrigger;
    protected updated(changedProps: PropertyValues): void;
    expandAll(): void;
    private _getKey;
    private _moveUp;
    private _moveDown;
    private _move;
    private _triggerMoved;
    private _triggerAdded;
    private _triggerRemoved;
    private _triggerChanged;
    private _duplicateTrigger;
    private _insertAfter;
    private _handleDragKeydown;
    private _stopSortSelection;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger": HaAutomationTrigger;
    }
}
