import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-wa-dialog";
import "../../../../components/ha-spinner";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import type { HomeAssistant } from "../../../../types";
import type { AutomationSaveTimeoutDialogParams } from "./show-dialog-automation-save-timeout";
declare class DialogAutomationSaveTimeout extends LitElement {
    hass: HomeAssistant;
    private _opened;
    private _saveComplete;
    private _params;
    showDialog(params: AutomationSaveTimeoutDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-automation-save-timeout": DialogAutomationSaveTimeout;
    }
}
export {};
