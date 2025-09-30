import { LitElement } from "lit";
import type { OptionSidebarConfig } from "../../../../data/automation";
import type { HomeAssistant } from "../../../../types";
import type HaAutomationConditionEditor from "../action/ha-automation-action-editor";
import "./ha-automation-sidebar-card";
export default class HaAutomationSidebarOption extends LitElement {
    hass: HomeAssistant;
    config: OptionSidebarConfig;
    isWide: boolean;
    disabled: boolean;
    narrow: boolean;
    editor?: HaAutomationConditionEditor;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-sidebar-option": HaAutomationSidebarOption;
    }
}
