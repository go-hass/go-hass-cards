import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../../../../common/translations/localize";
import "../../../../components/ha-checkbox";
import "../../../../components/ha-formfield";
import type { BackupData } from "../../../../data/backup";
import type { HomeAssistant } from "../../../../types";
import "./ha-backup-addons-picker";
import "./ha-backup-formfield-label";
export declare class HaBackupDataPicker extends LitElement {
    hass?: HomeAssistant;
    data: BackupData;
    value?: BackupData;
    localize?: LocalizeFunc;
    requiredItems: string[];
    translationKeyPanel: "page-onboarding.restore" | "config.backup";
    addonsDisabled: boolean;
    _addonIcons: Record<string, boolean>;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _fetchAddonInfo;
    private _homeAssistantItems;
    private _localizeFolder;
    private _addonsItems;
    private _parseValue;
    private _formatValue;
    private _homeassistantChanged;
    private _addonsChanged;
    private _sectionChanged;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-data-picker": HaBackupDataPicker;
    }
}
