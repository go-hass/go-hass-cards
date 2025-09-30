import type { HomeAssistant } from "../../types";
export interface VoiceCommandDialogParams {
    pipeline_id: "last_used" | "preferred" | string;
    start_listening?: boolean;
}
export declare const showVoiceCommandDialog: (element: HTMLElement, hass: HomeAssistant, dialogParams: VoiceCommandDialogParams) => void;
