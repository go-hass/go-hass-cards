import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { JoinBetaDialogParams } from "./show-dialog-join-beta";
export declare class DialogJoinBeta extends LitElement implements HassDialog<JoinBetaDialogParams> {
    hass: HomeAssistant;
    private _dialogParams?;
    showDialog(dialogParams: JoinBetaDialogParams): void;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _cancel;
    private _join;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-join-beta": DialogJoinBeta;
    }
}
