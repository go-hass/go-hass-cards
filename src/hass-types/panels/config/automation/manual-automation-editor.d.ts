import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-fab";
import "../../../components/ha-icon-button";
import "../../../components/ha-markdown";
import type { ManualAutomationConfig, SidebarConfig } from "../../../data/automation";
import type { HomeAssistant } from "../../../types";
import "./action/ha-automation-action";
import "./condition/ha-automation-condition";
import "./ha-automation-sidebar";
import "./trigger/ha-automation-trigger";
export declare const SIDEBAR_DEFAULT_WIDTH = 500;
export declare class HaManualAutomationEditor extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    disabled: boolean;
    saving: boolean;
    config: ManualAutomationConfig;
    stateObj?: HassEntity;
    dirty: boolean;
    private _pastedConfig?;
    private _sidebarConfig?;
    private _sidebarKey;
    private _sidebarWidthPx;
    private _sidebarElement?;
    private _collapsableElements?;
    private _prevSidebarWidthPx?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _renderContent;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _clearParam;
    private _openSidebar;
    private _sidebarConfigChanged;
    triggerCloseSidebar(): void;
    private _handleCloseSidebar;
    private _triggerChanged;
    private _conditionChanged;
    private _actionChanged;
    private _saveAutomation;
    private _handlePaste;
    private _appendToExistingConfig;
    private _replaceExistingConfig;
    private _showPastedToastWithUndo;
    resetPastedConfig(): void;
    expandAll(): void;
    collapseAll(): void;
    private _tryInsertAfterSelected;
    copySelectedRow(): void;
    cutSelectedRow(): void;
    deleteSelectedRow(): void;
    private _resizeSidebar;
    private _stopResizeSidebar;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "manual-automation-editor": HaManualAutomationEditor;
    }
    interface HASSDomEvents {
        "open-sidebar": SidebarConfig;
        "request-close-sidebar": undefined;
        "close-sidebar": undefined;
    }
}
