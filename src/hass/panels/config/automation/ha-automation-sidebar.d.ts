import { LitElement, nothing, type PropertyValues } from "lit";
import "../../../components/ha-resizable-bottom-sheet";
import { type SidebarConfig } from "../../../data/automation";
import type { HomeAssistant } from "../../../types";
import "./sidebar/ha-automation-sidebar-action";
import "./sidebar/ha-automation-sidebar-condition";
import "./sidebar/ha-automation-sidebar-option";
import "./sidebar/ha-automation-sidebar-script-field";
import "./sidebar/ha-automation-sidebar-script-field-selector";
import "./sidebar/ha-automation-sidebar-trigger";
export default class HaAutomationSidebar extends LitElement {
    hass: HomeAssistant;
    config?: SidebarConfig;
    isWide: boolean;
    disabled: boolean;
    narrow: boolean;
    sidebarKey?: number;
    private _yamlMode;
    private _resizing;
    private _bottomSheetElement?;
    private _handleElement?;
    private _resizeStartX;
    private _tinykeysUnsub?;
    protected updated(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    private _renderContent;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _getType;
    triggerCloseSidebar(ev?: CustomEvent): void;
    private _closeSidebar;
    private _toggleYamlMode;
    private _handleMouseDown;
    private _startResizing;
    private _handleMouseMove;
    private _updateSize;
    private _endResizing;
    private _unregisterResizeHandlers;
    private _startKeyboardResizing;
    private _stopKeyboardResizing;
    private _increaseSize;
    private _decreaseSize;
    private _keyboardResize;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-sidebar": HaAutomationSidebar;
    }
    interface HASSDomEvents {
        "toggle-yaml-mode": undefined;
        "yaml-changed": {
            value: unknown;
        };
        "sidebar-resized": {
            deltaInPx: number;
        };
        "sidebar-resizing-stopped": undefined;
    }
}
