import type { ConfigEntry } from "../../data/config_entries";
import type { IntegrationManifest } from "../../data/integration";
export interface ConfigEntrySystemOptionsDialogParams {
    entry: ConfigEntry;
    manifest?: IntegrationManifest;
}
export declare const loadConfigEntrySystemOptionsDialog: () => Promise<typeof import("./dialog-config-entry-system-options")>;
export declare const showConfigEntrySystemOptionsDialog: (element: HTMLElement, systemLogDetailParams: ConfigEntrySystemOptionsDialogParams) => void;
