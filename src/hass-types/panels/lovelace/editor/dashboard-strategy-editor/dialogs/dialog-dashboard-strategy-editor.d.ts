import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-button-menu";
import "../../../../../components/ha-dialog";
import "../../../../../components/ha-dialog-header";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-list-item";
import type { HomeAssistant } from "../../../../../types";
import "../hui-dashboard-strategy-element-editor";
import type { DashboardStrategyEditorDialogParams } from "./show-dialog-dashboard-strategy-editor";
declare class DialogDashboardStrategyEditor extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _strategyConfig?;
    private _GUImode;
    private _guiModeAvailable?;
    private _strategyEditorEl?;
    showDialog(params: DashboardStrategyEditorDialogParams): Promise<void>;
    closeDialog(): void;
    private _handleConfigChanged;
    private _handleGUIModeChanged;
    private _opened;
    private _save;
    private _delete;
    private _cancel;
    private _handleAction;
    private _toggleMode;
    private _takeControl;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-dashboard-strategy-editor": DialogDashboardStrategyEditor;
    }
}
export {};
