import "@material/mwc-linear-progress/mwc-linear-progress";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/buttons/ha-progress-button";
import "../../../components/ha-checkbox";
import "../../../components/ha-faded";
import "../../../components/ha-markdown";
import "../../../components/ha-md-list";
import "../../../components/ha-md-list-item";
import "../../../components/ha-spinner";
import "../../../components/ha-switch";
import type { UpdateEntity } from "../../../data/update";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoUpdate extends LitElement {
    hass: HomeAssistant;
    stateObj?: UpdateEntity;
    private _releaseNotes?;
    private _error?;
    private _markdownLoading;
    private _backupConfig?;
    private _createBackup;
    private _entitySources?;
    private _fetchBackupConfig;
    private _fetchUpdateBackupConfig;
    private _fetchEntitySources;
    private _isHaOrOsUpdate;
    private _computeCreateBackupTexts;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _renderLoader;
    protected firstUpdated(): void;
    private _markdownLoaded;
    private _fetchReleaseNotes;
    get _shouldCreateBackup(): boolean;
    private _handleInstall;
    private _createBackupChanged;
    private _handleSkip;
    private _handleClearSkipped;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-update": MoreInfoUpdate;
    }
}
export {};
