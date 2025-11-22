import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-icon-button-prev";
import "../../../../components/ha-wa-dialog";
import "../../../../components/ha-md-list";
import "../../../../components/ha-md-list-item";
import "../../../../components/ha-md-select";
import "../../../../components/ha-md-select-option";
import "../../../../components/ha-textfield";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "../components/config/ha-backup-config-data";
import "../components/ha-backup-agents-picker";
import type { GenerateBackupDialogParams } from "./show-dialog-generate-backup";
declare class DialogGenerateBackup extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _step?;
    private _agents;
    private _backupConfig?;
    private _params?;
    private _formData?;
    private _open;
    showDialog(_params: GenerateBackupDialogParams): void;
    private _dialogClosed;
    private _fetchAgents;
    private _fetchBackupConfig;
    closeDialog(): boolean;
    private _previousStep;
    private _nextStep;
    private get _allAgentIds();
    protected willUpdate(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private get _noDataSelected();
    private _renderData;
    private _dataConfigChanged;
    private _renderSync;
    private _selectChanged;
    private _agentsChanged;
    private _nameChanged;
    private _disabledAgentIds;
    private _submit;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-generate-backup": DialogGenerateBackup;
    }
}
export {};
