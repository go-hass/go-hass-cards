import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-automation-row";
import "../../../../components/ha-card";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-md-button-menu";
import "../../../../components/ha-md-menu-item";
import "../../../../components/ha-svg-icon";
import type { EntityRegistryEntry } from "../../../../data/entity_registry";
import type { Action, Option } from "../../../../data/script";
import type { HomeAssistant } from "../../../../types";
import "../action/ha-automation-action";
import "../condition/ha-automation-condition";
export default class HaAutomationOptionRow extends LitElement {
    hass: HomeAssistant;
    option?: Option;
    defaultActions?: Action[];
    narrow: boolean;
    disabled: boolean;
    index: number;
    first: boolean;
    last: boolean;
    optionsInSidebar: boolean;
    sortSelected: boolean;
    private _expanded;
    private _selected;
    private _collapsed;
    _entityReg: EntityRegistryEntry[];
    private _conditionElement?;
    private _actionElement?;
    private _automationRowElement?;
    get selected(): boolean;
    private _expandedChanged;
    private _getDescription;
    private _renderOverflowLabel;
    private _renderRow;
    private _renderContent;
    protected render(): TemplateResult<1> | typeof nothing;
    private _duplicateOption;
    private _moveUp;
    private _moveDown;
    private _removeOption;
    private _renameOption;
    private _conditionChanged;
    private _actionChanged;
    private _toggleSidebar;
    openSidebar(): void;
    expand(): void;
    collapse(): void;
    expandAll(): void;
    collapseAll(): void;
    private _toggleCollapse;
    focus(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-option-row": HaAutomationOptionRow;
    }
}
