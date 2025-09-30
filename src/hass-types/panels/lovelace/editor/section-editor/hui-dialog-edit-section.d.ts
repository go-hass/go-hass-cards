import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-button-menu";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-list-item";
import "../../../../components/ha-tab-group";
import "../../../../components/ha-tab-group-tab";
import "../../../../components/ha-yaml-editor";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import type { Lovelace } from "../../types";
import "./hui-section-settings-editor";
import "./hui-section-visibility-editor";
import type { EditSectionDialogParams } from "./show-edit-section-dialog";
export declare class HuiDialogEditSection extends LitElement implements HassDialog<EditSectionDialogParams> {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    private _params?;
    private _config?;
    private _viewConfig?;
    private _yamlMode;
    private _currTab;
    private _editor?;
    protected updated(changedProperties: PropertyValues): void;
    showDialog(params: EditSectionDialogParams): Promise<void>;
    closeDialog(): boolean;
    protected render(): TemplateResult<1> | typeof nothing;
    private _configChanged;
    private _handleTabChanged;
    private _handleAction;
    private _openSelectView;
    private _moveSectionToView;
    private _viewYamlChanged;
    private _ignoreKeydown;
    private _cancel;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-edit-section": HuiDialogEditSection;
    }
}
