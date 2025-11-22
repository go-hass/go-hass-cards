import { LitElement } from "lit";
import { type ConditionSidebarConfig } from "../../../../data/automation";
import type { HomeAssistant } from "../../../../types";
import "../condition/ha-automation-condition-editor";
import type HaAutomationConditionEditor from "../condition/ha-automation-condition-editor";
import "./ha-automation-sidebar-card";
export default class HaAutomationSidebarCondition extends LitElement {
    hass: HomeAssistant;
    config: ConditionSidebarConfig;
    isWide: boolean;
    disabled: boolean;
    yamlMode: boolean;
    narrow: boolean;
    sidebarKey?: number;
    private _warnings?;
    private _testing;
    private _testingResult?;
    editor?: HaAutomationConditionEditor;
    protected willUpdate(changedProperties: any): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _testCondition;
    private _handleUiModeNotAvailable;
    private _valueChangedSidebar;
    private _yamlChangedSidebar;
    private _toggleYamlMode;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-sidebar-condition": HaAutomationSidebarCondition;
    }
}
