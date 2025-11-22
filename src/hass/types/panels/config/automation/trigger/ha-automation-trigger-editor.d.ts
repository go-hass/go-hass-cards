import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-textfield";
import "../../../../components/ha-yaml-editor";
import type { HaYamlEditor } from "../../../../components/ha-yaml-editor";
import type { Trigger } from "../../../../data/automation";
import type { HomeAssistant } from "../../../../types";
import "../ha-automation-editor-warning";
export default class HaAutomationTriggerEditor extends LitElement {
    hass: HomeAssistant;
    trigger: Trigger;
    disabled: boolean;
    yamlMode: boolean;
    uiSupported: boolean;
    inSidebar: boolean;
    showId: boolean;
    yamlEditor?: HaYamlEditor;
    protected render(): import("lit-html").TemplateResult<1>;
    private _idChanged;
    private _onYamlChange;
    private _onUiChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-editor": HaAutomationTriggerEditor;
    }
}
