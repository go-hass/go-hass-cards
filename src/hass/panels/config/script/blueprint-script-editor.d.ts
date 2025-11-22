import { type CSSResultGroup } from "lit";
import "../../../components/ha-fab";
import "../../../components/ha-markdown";
import type { BlueprintScriptConfig } from "../../../data/script";
import { HaBlueprintGenericEditor } from "../blueprint/blueprint-generic-editor";
export declare class HaBlueprintScriptEditor extends HaBlueprintGenericEditor {
    config: BlueprintScriptConfig;
    saving: boolean;
    dirty: boolean;
    protected get _config(): BlueprintScriptConfig;
    protected render(): import("lit-html").TemplateResult<1>;
    private _saveScript;
    protected _getBlueprints(): Promise<void>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "blueprint-script-editor": HaBlueprintScriptEditor;
    }
}
