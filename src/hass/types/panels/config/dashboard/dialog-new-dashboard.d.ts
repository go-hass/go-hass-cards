import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/search-input";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import type { NewDashboardDialogParams } from "./show-dialog-new-dashboard";
import "./dashboard-card";
declare class DialogNewDashboard extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _opened;
    private _params?;
    private _filter;
    private _localizedStrategies;
    showDialog(params: NewDashboardDialogParams): void;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleSearchChange;
    private _filterStrategies;
    private _generateStrategyConfig;
    private _selected;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-new-dashboard": DialogNewDashboard;
    }
}
export {};
