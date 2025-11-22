import type { HassServiceTarget } from "home-assistant-js-websocket";
import { LitElement, type PropertyValues } from "lit";
import type { HaEntityPickerEntityFilterFunc } from "../../data/entity";
import type { TargetType, TargetTypeFloorless } from "../../data/target";
import type { HomeAssistant } from "../../types";
import "../chips/ha-chip-set";
import "../chips/ha-filter-chip";
import type { HaDevicePickerDeviceFilterFunc } from "../device/ha-device-picker";
import "../entity/state-badge";
import "../ha-combo-box-item";
import "../ha-floor-icon";
import "../ha-md-list";
import "../ha-svg-icon";
import "../ha-textfield";
import "../ha-tree-indicator";
export declare class HaTargetPickerSelector extends LitElement {
    hass: HomeAssistant;
    filterType?: TargetTypeFloorless;
    mode: "popover" | "dialog";
    /**
     * Show only targets with entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show only targets with entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: HaEntityPickerEntityFilterFunc;
    targetValue?: HassServiceTarget;
    createDomains?: string[];
    private _virtualizerElement?;
    private _searchFieldElement?;
    private _searchTerm;
    private _listScrolled;
    private _configEntryLookup;
    private _selectedItemIndex;
    private _filterHeader?;
    private _labelRegistry;
    private _getDevicesMemoized;
    private _getLabelsMemoized;
    private _getEntitiesMemoized;
    private _getAreasAndFloorsMemoized;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    private _removeKeyboardShortcuts?;
    willUpdate(changedProps: PropertyValues): void;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private _loadConfigEntries;
    protected render(): import("lit-html").TemplateResult<1>;
    private _visibilityChanged;
    private _registerKeyboardShortcuts;
    private _focusList;
    private _selectNextItem;
    private _selectPreviousItem;
    private _selectFirstItem;
    private _selectLastItem;
    private _scrollToSelectedItem;
    private _pickSelectedItem;
    private _renderFilterButtons;
    private _getRowType;
    private _renderRow;
    private _filterGroup;
    private _keyFunction;
    private _getItems;
    private _getCreateItems;
    private _fuseIndexes;
    private _createFuseIndex;
    private _searchChanged;
    private _handlePickTarget;
    private _pickTarget;
    private get _showEntityId();
    private _toggleFilter;
    private _onScrollList;
    private _resetSelectedItem;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-target-picker-selector": HaTargetPickerSelector;
    }
    interface HASSDomEvents {
        "filter-type-changed": TargetTypeFloorless | undefined;
        "target-picked": {
            type: TargetType;
            id: string;
        };
        "create-domain-picked": string;
    }
}
