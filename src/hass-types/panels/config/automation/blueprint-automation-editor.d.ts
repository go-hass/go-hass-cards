import type { HassEntity } from "home-assistant-js-websocket";
import { type CSSResultGroup } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-markdown";
import "../../../components/ha-fab";
import type { BlueprintAutomationConfig } from "../../../data/automation";
import { HaBlueprintGenericEditor } from "../blueprint/blueprint-generic-editor";
export declare class HaBlueprintAutomationEditor extends HaBlueprintGenericEditor {
    config: BlueprintAutomationConfig;
    stateObj?: HassEntity;
    saving: boolean;
    dirty: boolean;
    protected get _config(): BlueprintAutomationConfig;
    protected render(): import("lit-html").TemplateResult<1>;
    private _saveAutomation;
    protected _getBlueprints(): Promise<void>;
    private _enable;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "blueprint-automation-editor": HaBlueprintAutomationEditor;
    }
}
