import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import type { AutomationClipboard } from "../../../../data/automation";
import type { Action } from "../../../../data/script";
import type { HomeAssistant } from "../../../../types";
export default class HaAutomationAction extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    disabled: boolean;
    root: boolean;
    actions: Action[];
    highlightedActions?: Action[];
    optionsInSidebar: boolean;
    private _rowSortSelected?;
    _clipboard?: AutomationClipboard;
    private _actionRowElements?;
    private _focusLastActionOnChange;
    private _focusActionIndexOnChange?;
    private _actionKeys;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    expandAll(): void;
    collapseAll(): void;
    private _addActionDialog;
    private _addAction;
    private _getKey;
    private _moveUp;
    private _moveDown;
    private _move;
    private _actionMoved;
    private _actionAdded;
    private _actionRemoved;
    private _actionChanged;
    private _duplicateAction;
    private _insertAfter;
    private _handleDragKeydown;
    private _stopSortSelection;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action": HaAutomationAction;
    }
}
