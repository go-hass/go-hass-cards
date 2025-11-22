import { type CSSResultGroup, LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-yaml-editor";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { PasteReplaceDialogParams } from "./show-dialog-paste-replace";
declare class DialogPasteReplace extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _opened;
    private _params;
    showDialog(params: PasteReplaceDialogParams): void;
    closeDialog(): boolean;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleReplace;
    private _handleAppend;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-paste-replace": DialogPasteReplace;
    }
}
export {};
