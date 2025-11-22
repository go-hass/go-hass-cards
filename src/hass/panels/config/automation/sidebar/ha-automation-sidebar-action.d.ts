import { LitElement } from "lit";
import "../../../../components/ha-md-divider";
import "../../../../components/ha-md-menu-item";
import type { ActionSidebarConfig } from "../../../../data/automation";
import type { HomeAssistant } from "../../../../types";
import type HaAutomationConditionEditor from "../action/ha-automation-action-editor";
import "../trigger/ha-automation-trigger-editor";
import "./ha-automation-sidebar-card";
export default class HaAutomationSidebarAction extends LitElement {
    hass: HomeAssistant;
    config: ActionSidebarConfig;
    isWide: boolean;
    disabled: boolean;
    yamlMode: boolean;
    narrow: boolean;
    sidebarKey?: number;
    private _warnings?;
    editor?: HaAutomationConditionEditor;
    protected willUpdate(changedProperties: any): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleUiModeNotAvailable;
    private _valueChangedSidebar;
    private _yamlChangedSidebar;
    private _toggleYamlMode;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-sidebar-action": HaAutomationSidebarAction;
    }
}
