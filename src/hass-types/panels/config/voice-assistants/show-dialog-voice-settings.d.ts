import type { ExtEntityRegistryEntry } from "../../../data/entity_registry";
import type { ExposeEntitySettings } from "../../../data/expose";
export interface VoiceSettingsDialogParams {
    entityId: string;
    exposed: ExposeEntitySettings;
    extEntityReg?: ExtEntityRegistryEntry;
    exposedEntitiesChanged?: () => void;
}
export declare const loadVoiceSettingsDialog: () => Promise<typeof import("./dialog-voice-settings")>;
export declare const showVoiceSettingsDialog: (element: HTMLElement, aliasesParams: VoiceSettingsDialogParams) => void;
