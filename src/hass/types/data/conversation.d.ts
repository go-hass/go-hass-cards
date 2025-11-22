import type { HomeAssistant } from "../types";
export declare const enum ConversationEntityFeature {
    CONTROL = 1
}
interface IntentTarget {
    type: "area" | "device" | "entity" | "domain" | "device_class" | "custom";
    name: string;
    id: string | null;
}
interface IntentResultBase {
    language: string;
    speech: Record<"plain" | "ssml", {
        extra_data: any;
        speech: string;
    }> | null;
}
interface IntentResultActionDone extends IntentResultBase {
    response_type: "action_done";
    data: {
        targets: IntentTarget[];
        success: IntentTarget[];
        failed: IntentTarget[];
    };
}
interface IntentResultQueryAnswer extends IntentResultBase {
    response_type: "query_answer";
    data: {
        targets: IntentTarget[];
        success: IntentTarget[];
        failed: IntentTarget[];
    };
}
interface IntentResultError extends IntentResultBase {
    response_type: "error";
    data: {
        code: "no_intent_match" | "no_valid_targets" | "failed_to_handle" | "unknown";
    };
}
export interface ConversationResult {
    conversation_id: string | null;
    response: IntentResultActionDone | IntentResultQueryAnswer | IntentResultError;
    continue_conversation: boolean;
}
export interface Agent {
    id: string;
    name: string;
    supported_languages: "*" | string[];
}
export interface AssistDebugResult {
    intent: {
        name: string;
    };
    entities: Record<string, {
        name: string;
        value: string;
        text: string;
    }>;
}
export interface AssistDebugResponse {
    results: (AssistDebugResult | null)[];
}
export declare const processConversationInput: (hass: HomeAssistant, text: string, conversation_id: string | null, language: string) => Promise<ConversationResult>;
export declare const listAgents: (hass: HomeAssistant, language?: string, country?: string) => Promise<{
    agents: Agent[];
}>;
export declare const prepareConversation: (hass: HomeAssistant, language?: string) => Promise<void>;
export declare const debugAgent: (hass: HomeAssistant, sentences: string[] | string, language: string, device_id?: string) => Promise<AssistDebugResponse>;
export interface LanguageScore {
    cloud: number;
    focused_local: number;
    full_local: number;
}
export type LanguageScores = Record<string, LanguageScore>;
export declare const getLanguageScores: (hass: HomeAssistant, language?: string, country?: string) => Promise<{
    languages: LanguageScores;
    preferred_language: string | null;
}>;
export {};
