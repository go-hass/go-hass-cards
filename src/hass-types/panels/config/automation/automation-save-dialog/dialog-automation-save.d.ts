import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/chips/ha-assist-chip";
import "../../../../components/chips/ha-chip-set";
import "../../../../components/ha-alert";
import "../../../../components/ha-area-picker";
import "../../../../components/ha-domain-icon";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-labels-picker";
import "../../../../components/ha-suggest-with-ai-button";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-textarea";
import "../../../../components/ha-textfield";
import "../../category/ha-category-picker";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { SaveDialogParams } from "./show-dialog-automation-save";
declare class DialogAutomationSave extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _opened;
    private _error?;
    private _visibleOptionals;
    private _entryUpdates;
    private _params;
    private _newName?;
    private _newIcon?;
    private _newDescription?;
    showDialog(params: SaveDialogParams): void;
    closeDialog(): boolean;
    protected _renderOptionalChip(id: string, label: string): import("lit-html").TemplateResult<1> | typeof nothing;
    protected _renderDiscard(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected _renderInputs(): import("lit-html").TemplateResult<1> | typeof nothing;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _addOptional;
    private _registryEntryChanged;
    private _iconChanged;
    private _valueChanged;
    private _handleDiscard;
    private _getSuggestData;
    private _generateTask;
    private _handleSuggestion;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-automation-save": DialogAutomationSave;
    }
}
export {};
