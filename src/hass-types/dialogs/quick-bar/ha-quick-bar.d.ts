import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-icon-button";
import "../../components/ha-label";
import "../../components/ha-button";
import "../../components/ha-list";
import "../../components/ha-md-list-item";
import "../../components/ha-spinner";
import "../../components/ha-textfield";
import "../../components/ha-tip";
import type { HomeAssistant } from "../../types";
import { type QuickBarParams } from "./show-dialog-quick-bar";
export declare class QuickBar extends LitElement {
    hass: HomeAssistant;
    private _commandItems?;
    private _entityItems?;
    private _deviceItems?;
    private _filter;
    private _search;
    private _open;
    private _opened;
    private _narrow;
    private _hint?;
    private _mode;
    private _filterInputField?;
    private _focusSet;
    private _focusListElement?;
    showDialog(params: QuickBarParams): Promise<void>;
    closeDialog(): void;
    protected willUpdate(): void;
    private _getItems;
    protected render(): TemplateResult<1> | typeof nothing;
    private _initializeItemsIfNeeded;
    private _handleOpened;
    private _handleRangeChanged;
    private _renderItem;
    private _renderDeviceItem;
    private _renderEntityItem;
    private _renderCommandItem;
    private _processItemAndCloseDialog;
    private _handleInputKeyDown;
    private _getItemAtIndex;
    private _addSpinnerToCommandItem;
    private _handleSearchChange;
    private _clearSearch;
    private _debouncedSetFilter;
    private _setFocusFirstListItem;
    private _handleListItemKeyDown;
    private _handleItemClick;
    private _generateDeviceItems;
    private _generateEntityItems;
    private _generateCommandItems;
    private _generateReloadCommands;
    private _generateServerControlCommands;
    private _generateNavigationCommands;
    private _generateNavigationPanelCommands;
    private _generateNavigationConfigSectionCommands;
    private _getNavigationInfoFromConfig;
    private _finalizeNavigationCommands;
    private _fuseIndex;
    private _filterItems;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-quick-bar": QuickBar;
    }
}
