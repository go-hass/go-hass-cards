import { LitElement, nothing } from "lit";
import "../../../../../components/ha-expansion-panel";
import "../../../../../components/ha-md-list-item";
import "../../../../../components/ha-md-select";
import "../../../../../components/ha-md-select-option";
import "../../../../../components/ha-md-textfield";
import type { BackupConfig, Retention } from "../../../../../data/backup";
import type { HomeAssistant } from "../../../../../types";
export type BackupConfigSchedule = Pick<BackupConfig, "schedule" | "retention">;
export declare enum RetentionPreset {
    GLOBAL = "global",
    COPIES_3 = "copies_3",
    FOREVER = "forever",
    CUSTOM = "custom"
}
export interface RetentionData {
    type: "copies" | "days" | "forever";
    value: number;
}
declare class HaBackupConfigRetention extends LitElement {
    hass: HomeAssistant;
    retention?: Retention | null;
    headline?: string;
    locationSpecific: boolean;
    private _preset;
    private _type;
    private _value;
    private _customValueField?;
    private _customTypeField?;
    private _configLoaded;
    private presetOptions;
    willUpdate(): void;
    protected render(): import("lit-html").TemplateResult<1> | typeof nothing;
    private _retentionPresetChanged;
    private _retentionValueChanged;
    private _retentionTypeChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-config-retention": HaBackupConfigRetention;
    }
}
export {};
