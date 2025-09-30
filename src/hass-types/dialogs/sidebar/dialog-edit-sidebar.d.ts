import "@material/mwc-linear-progress/mwc-linear-progress";
import { LitElement, nothing, type TemplateResult } from "lit";
import "../../components/ha-alert";
import "../../components/ha-dialog-header";
import "../../components/ha-fade-in";
import "../../components/ha-icon-button";
import "../../components/ha-items-display-editor";
import "../../components/ha-md-dialog";
import "../../components/ha-spinner";
import type { HomeAssistant } from "../../types";
declare class DialogEditSidebar extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _dialog?;
    private _order?;
    private _hidden?;
    private _error?;
    /**
     * If user has old localStorage values, show a confirmation dialog
     */
    private _migrateToUserData;
    showDialog(): Promise<void>;
    private _getData;
    private _dialogClosed;
    closeDialog(): void;
    private _panels;
    private _renderContent;
    protected render(): TemplateResult<1> | typeof nothing;
    private _changed;
    private _save;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-edit-sidebar": DialogEditSidebar;
    }
}
export {};
