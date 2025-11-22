import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-button";
import "../ha-check-list-item";
import "../ha-dialog";
import "../ha-dialog-header";
import "../ha-list";
import "../ha-spinner";
import "../ha-svg-icon";
import "../ha-tip";
import "./ha-media-player-browse";
import "./ha-media-upload-button";
import type { MediaManageDialogParams } from "./show-media-manage-dialog";
declare class DialogMediaManage extends LitElement {
    hass: HomeAssistant;
    private _currentItem?;
    private _params?;
    private _uploading;
    private _deleting;
    private _selected;
    private _filesChanged;
    showDialog(params: MediaManageDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleSelected;
    private _startUploading;
    private _doneUploading;
    private _handleDeselectAll;
    private _handleDelete;
    private _refreshMedia;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-media-manage": DialogMediaManage;
    }
}
export {};
