import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-dialog";
import "../../../components/ha-button";
import "../../../components/ha-formfield";
import "../../../components/ha-radio";
import type { HomeAssistant } from "../../../types";
import type { DialogStatisticsUnitsChangedParams } from "./show-dialog-statistics-fix-units-changed";
export declare class DialogStatisticsFixUnitsChanged extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _action?;
    showDialog(params: DialogStatisticsUnitsChangedParams): void;
    closeDialog(): void;
    private _closeDialog;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleActionChanged;
    private _cancel;
    private _fixIssue;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-statistics-fix-units-changed": DialogStatisticsFixUnitsChanged;
    }
}
