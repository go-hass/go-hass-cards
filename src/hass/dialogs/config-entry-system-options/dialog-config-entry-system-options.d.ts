import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-formfield";
import "../../components/ha-switch";
import "../../components/ha-button";
import type { HomeAssistant } from "../../types";
import type { ConfigEntrySystemOptionsDialogParams } from "./show-dialog-config-entry-system-options";
declare class DialogConfigEntrySystemOptions extends LitElement {
    hass: HomeAssistant;
    private _disableNewEntities;
    private _disablePolling;
    private _error?;
    private _params?;
    private _submitting;
    showDialog(params: ConfigEntrySystemOptionsDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _disableNewEntitiesChanged;
    private _disablePollingChanged;
    private _updateEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-config-entry-system-options": DialogConfigEntrySystemOptions;
    }
}
export {};
