import type { AssistPipeline, AssistPipelineMutableParams } from "../../../data/assist_pipeline";
export interface VoiceAssistantPipelineDetailsDialogParams {
    cloudActiveSubscription?: boolean;
    pipeline?: AssistPipeline;
    hideWakeWord?: boolean;
    updatePipeline: (updates: AssistPipelineMutableParams) => Promise<unknown>;
    createPipeline?: (values: AssistPipelineMutableParams) => Promise<unknown>;
}
export declare const loadVoiceAssistantPipelineDetailDialog: () => Promise<typeof import("./dialog-voice-assistant-pipeline-detail")>;
export declare const showVoiceAssistantPipelineDetailDialog: (element: HTMLElement, dialogParams: VoiceAssistantPipelineDetailsDialogParams) => void;
