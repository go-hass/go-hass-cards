import { LitElement } from "lit";
import "../../../../components/ha-checkbox";
import "../../../../components/ha-formfield";
import type { HomeAssistant } from "../../../../types";
import "./ha-backup-formfield-label";
export interface BackupAddonItem {
    slug: string;
    name: string;
    version?: string;
    icon?: boolean;
    iconPath?: string;
}
export declare class HaBackupAddonsPicker extends LitElement {
    hass?: HomeAssistant;
    addons: BackupAddonItem[];
    value?: string[];
    hideVersion: boolean;
    disabled: boolean;
    private _addons;
    protected render(): import("lit-html").TemplateResult<1>;
    private _checkboxChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-addons-picker": HaBackupAddonsPicker;
    }
}
