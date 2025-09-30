import { LitElement } from "lit";
import type { BackupLocationSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-mount-picker";
export declare class HaBackupLocationSelector extends LitElement {
    hass: HomeAssistant;
    selector: BackupLocationSelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-backup_location": HaBackupLocationSelector;
    }
}
