import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-icon-picker";
import "../../../components/ha-settings-row";
import "../../../components/ha-textfield";
import "../../../components/ha-button";
import type { HomeAssistant } from "../../../types";
import "./ha-category-picker";
import type { AssignCategoryDialogParams } from "./show-dialog-assign-category";
declare class DialogAssignCategory extends LitElement {
    hass: HomeAssistant;
    private _scope?;
    private _category?;
    private _error?;
    private _params?;
    private _submitting?;
    showDialog(params: AssignCategoryDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _categoryChanged;
    private _updateEntry;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-assign-category": DialogAssignCategory;
    }
}
export {};
