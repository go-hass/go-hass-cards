import { LitElement } from "lit";
import "../../../../components/ha-yaml-editor";
import type { HaYamlEditor } from "../../../../components/ha-yaml-editor";
import { type Action } from "../../../../data/script";
import type { HomeAssistant } from "../../../../types";
import "../ha-automation-editor-warning";
export default class HaAutomationActionEditor extends LitElement {
    hass: HomeAssistant;
    action: Action;
    disabled: boolean;
    yamlMode: boolean;
    indent: boolean;
    selected: boolean;
    narrow: boolean;
    inSidebar: boolean;
    uiSupported: boolean;
    yamlEditor?: HaYamlEditor;
    private _collapsibleElement?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _onYamlChange;
    private _onUiChanged;
    expandAll(): void;
    collapseAll(): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-editor": HaAutomationActionEditor;
    }
}
