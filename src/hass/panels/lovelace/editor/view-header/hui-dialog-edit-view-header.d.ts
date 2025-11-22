import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-list-item";
import "../../../../components/ha-spinner";
import "../../../../components/ha-yaml-editor";
import type { HomeAssistant } from "../../../../types";
import "./hui-view-header-settings-editor";
import type { EditViewHeaderDialogParams } from "./show-edit-view-header-dialog";
export declare class HuiDialogEditViewHeader extends LitElement {
    hass?: HomeAssistant;
    private _params?;
    private _config?;
    private _saving;
    private _dirty;
    private _yamlMode;
    private _editor?;
    protected updated(changedProperties: PropertyValues): void;
    showDialog(params: EditViewHeaderDialogParams): void;
    closeDialog(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleAction;
    private _configChanged;
    private _viewYamlChanged;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-edit-view-header": HuiDialogEditViewHeader;
    }
}
