import { LitElement } from "lit";
import type { TriggerSidebarConfig } from "../../../../data/automation";
import type { HomeAssistant } from "../../../../types";
import "../trigger/ha-automation-trigger-editor";
import type HaAutomationTriggerEditor from "../trigger/ha-automation-trigger-editor";
import "./ha-automation-sidebar-card";
export default class HaAutomationSidebarTrigger extends LitElement {
    hass: HomeAssistant;
    config: TriggerSidebarConfig;
    isWide: boolean;
    disabled: boolean;
    yamlMode: boolean;
    narrow: boolean;
    sidebarKey?: number;
    private _requestShowId;
    private _warnings?;
    editor?: HaAutomationTriggerEditor;
    protected willUpdate(changedProperties: any): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleUiModeNotAvailable;
    private _valueChangedSidebar;
    private _yamlChangedSidebar;
    private _toggleYamlMode;
    private _showTriggerId;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-sidebar-trigger": HaAutomationSidebarTrigger;
    }
}
