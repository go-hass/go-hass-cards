import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-icon-button-prev";
import "../../../../components/ha-icon-next";
import "../../../../components/ha-md-dialog";
import "../../../../components/ha-md-list";
import "../../../../components/ha-md-list-item";
import "../../../../components/ha-password-field";
import "../../../../components/ha-svg-icon";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "../components/config/ha-backup-config-agents";
import "../components/config/ha-backup-config-data";
import "../components/config/ha-backup-config-schedule";
import type { BackupOnboardingDialogParams } from "./show-dialog-backup_onboarding";
declare class DialogBackupOnboarding extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _opened;
    private _step?;
    private _params?;
    private _dialog;
    private _config?;
    showDialog(params: BackupOnboardingDialogParams): void;
    closeDialog(): boolean;
    private get _firstStep();
    private _save;
    private _done;
    private _previousStep;
    private _nextStep;
    protected updated(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private get _defaultAgents();
    private _useRecommended;
    private get _stepTitle();
    private _isStepValid;
    private _renderStepContent;
    private _downloadKey;
    private _copyKeyToClipboard;
    private _dataConfig;
    private _dataChanged;
    private _scheduleChanged;
    private _agentsConfigChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-backup-onboarding": DialogBackupOnboarding;
    }
}
export {};
