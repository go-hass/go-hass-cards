import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-list-item";
import "../../../../components/ha-spinner";
import "../../../../components/ha-tab-group";
import "../../../../components/ha-tab-group-tab";
import "../../../../components/ha-yaml-editor";
import type { HomeAssistant } from "../../../../types";
import "../../components/hui-entity-editor";
import "./hui-view-background-editor";
import "./hui-view-editor";
import "./hui-view-visibility-editor";
import type { EditViewDialogParams } from "./show-edit-view-dialog";
export declare class HuiDialogEditView extends LitElement {
    hass?: HomeAssistant;
    private _params?;
    private _lovelace?;
    private _config?;
    private _saving;
    private _currTab;
    private _dirty;
    private _valid;
    private _yamlMode;
    private _editor?;
    private _currentType;
    get _type(): string;
    protected updated(changedProperties: PropertyValues): void;
    showDialog(params: EditViewDialogParams): void;
    closeDialog(): void;
    private get _viewConfigTitle();
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _handleAction;
    private _openSelectDashboard;
    private _moveViewToDashboard;
    private _convertToSection;
    private _delete;
    private _deleteConfirm;
    private _handleTabChanged;
    private _save;
    private _viewConfigChanged;
    private _viewVisibilityChanged;
    private _viewYamlChanged;
    private _isConfigChanged;
    private get _creatingView();
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-edit-view": HuiDialogEditView;
    }
}
