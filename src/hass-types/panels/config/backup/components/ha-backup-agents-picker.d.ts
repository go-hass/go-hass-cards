import { LitElement } from "lit";
import "../../../../components/ha-checkbox";
import "../../../../components/ha-formfield";
import "../../../../components/ha-svg-icon";
import type { BackupAgent } from "../../../../data/backup";
import type { HomeAssistant } from "../../../../types";
declare class HaBackupAgentsPicker extends LitElement {
    hass: HomeAssistant;
    disabled: boolean;
    agents: BackupAgent[];
    disabledAgentIds?: string[];
    value: string[];
    render(): import("lit-html").TemplateResult<1>;
    private _renderAgent;
    private _checkboxChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-agents-picker": HaBackupAgentsPicker;
    }
}
export {};
