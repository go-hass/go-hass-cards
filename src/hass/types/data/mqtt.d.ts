import type { HomeAssistant } from "../types";
export interface MQTTMessage {
    topic: string;
    payload: string;
    qos: number;
    retain: number;
    time: string;
}
export interface MQTTTopicDebugInfo {
    topic: string;
    messages: MQTTMessage[];
}
export interface MQTTDiscoveryDebugInfo {
    topic: string;
    payload: string;
}
export interface MQTTEntityDebugInfo {
    entity_id: string;
    discovery_data: MQTTDiscoveryDebugInfo;
    subscriptions: MQTTTopicDebugInfo[];
    transmitted: MQTTTopicDebugInfo[];
}
export interface MQTTTriggerDebugInfo {
    discovery_data: MQTTDiscoveryDebugInfo;
}
export interface MQTTDeviceDebugInfo {
    entities: MQTTEntityDebugInfo[];
    triggers: MQTTTriggerDebugInfo[];
}
export declare const subscribeMQTTTopic: (hass: HomeAssistant, topic: string, callback: (message: MQTTMessage) => void, qos?: number) => Promise<() => Promise<void>>;
export declare const fetchMQTTDebugInfo: (hass: HomeAssistant, deviceId: string) => Promise<MQTTDeviceDebugInfo>;
