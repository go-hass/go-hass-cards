import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-alert";
import "../ha-button";
import "../ha-dialog";
import "../ha-dialog-header";
import "./ha-media-player-toggle";
import type { JoinMediaPlayersDialogParams } from "./show-join-media-players-dialog";
declare class DialogJoinMediaPlayers extends LitElement {
    hass: HomeAssistant;
    private _entityId?;
    private _groupMembers;
    private _selectedEntities;
    private _submitting?;
    private _error?;
    showDialog(params: JoinMediaPlayersDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _mediaPlayerEntities;
    private _selectAll;
    private _handleSelectedChange;
    private _submit;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-join-media-players": DialogJoinMediaPlayers;
    }
}
export {};
