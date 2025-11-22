import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-icon-button";
import "../../../components/ha-markdown";
import type { ScriptConfig } from "../../../data/script";
import type { HomeAssistant } from "../../../types";
import "../automation/action/ha-automation-action";
import "../automation/ha-automation-sidebar";
import "./ha-script-fields";
export declare class HaManualScriptEditor extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    disabled: boolean;
    saving: boolean;
    config: ScriptConfig;
    dirty: boolean;
    private _pastedConfig?;
    private _sidebarConfig?;
    private _sidebarKey;
    private _sidebarWidthPx;
    private _scriptFields?;
    private _sidebarElement?;
    private _collapsableElements?;
    private _openFields;
    private _prevSidebarWidthPx?;
    addFields(): void;
    protected updated(changedProps: any): void;
    private _renderContent;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _clearParam;
    private _fieldsChanged;
    private _sequenceChanged;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handlePaste;
    private _appendToExistingConfig;
    private _replaceExistingConfig;
    private _showPastedToastWithUndo;
    resetPastedConfig(): void;
    private _openSidebar;
    private _sidebarConfigChanged;
    triggerCloseSidebar(): void;
    private _handleCloseSidebar;
    private _saveScript;
    private _tryInsertAfterSelected;
    expandAll(): void;
    collapseAll(): void;
    copySelectedRow(): void;
    cutSelectedRow(): void;
    deleteSelectedRow(): void;
    private _resizeSidebar;
    private _stopResizeSidebar;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "manual-script-editor": HaManualScriptEditor;
    }
}
